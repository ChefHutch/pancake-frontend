import BigNumber from 'bignumber.js'
import { request, gql } from 'graphql-request'
import { ethers } from 'ethers'
import { GRAPH_API_LOTTERY } from 'config/constants/endpoints'
import { LotteryStatus, LotteryTicket } from 'config/constants/types'
import lotteryV2Abi from 'config/abi/lotteryV2.json'
import { getLotteryV2Address } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import {
  LotteryUserGraphEntity,
  LotteryRoundGraphEntity,
  LotteryRound,
  UserTicketsResponse,
  UserRound,
  LotteryRoundUserTickets,
} from 'state/types'
import { getLotteryV2Contract } from 'utils/contractHelpers'

const lotteryContract = getLotteryV2Contract()

export const fetchLottery = async (lotteryId: string): Promise<LotteryRound> => {
  try {
    const lotteryData = await lotteryContract.viewLottery(lotteryId)
    const {
      status,
      startTime,
      endTime,
      priceTicketInCake,
      discountDivisor,
      treasuryFee,
      firstTicketId,
      lastTicketId,
      amountCollectedInCake,
      finalNumber,
      cakePerBracket,
      countWinnersPerBracket,
      rewardsBreakdown,
    } = lotteryData

    const statusKey = Object.keys(LotteryStatus)[status]
    const serializedCakePerBracket = cakePerBracket.map((cakeInBracket) => {
      return new BigNumber(cakeInBracket.toString()).toJSON()
    })
    const serializedCountWinnersPerBracket = countWinnersPerBracket.map((winnersInBracket) => {
      return new BigNumber(winnersInBracket.toString()).toJSON()
    })
    const serializedRewardsBreakdown = rewardsBreakdown.map((reward) => {
      return new BigNumber(reward.toString()).toJSON()
    })

    return {
      isLoading: false,
      status: LotteryStatus[statusKey],
      startTime: startTime?.toString(),
      endTime: endTime?.toString(),
      priceTicketInCake: new BigNumber(priceTicketInCake.toString()).toJSON(),
      discountDivisor: discountDivisor?.toString(),
      treasuryFee: treasuryFee?.toString(),
      firstTicketId: firstTicketId?.toString(),
      lastTicketId: lastTicketId?.toString(),
      amountCollectedInCake: new BigNumber(amountCollectedInCake.toString()).toJSON(),
      finalNumber,
      cakePerBracket: serializedCakePerBracket,
      countWinnersPerBracket: serializedCountWinnersPerBracket,
      rewardsBreakdown: serializedRewardsBreakdown,
    }
  } catch (error) {
    return {
      isLoading: true,
      status: LotteryStatus.PENDING,
      startTime: '',
      endTime: '',
      priceTicketInCake: '',
      discountDivisor: '',
      treasuryFee: '',
      firstTicketId: '',
      lastTicketId: '',
      amountCollectedInCake: '',
      finalNumber: '',
      cakePerBracket: [],
      countWinnersPerBracket: [],
      rewardsBreakdown: [],
    }
  }
}

export const fetchPublicData = async () => {
  try {
    const calls = ['currentLotteryId', 'maxNumberTicketsPerBuyOrClaim'].map((method) => ({
      address: getLotteryV2Address(),
      name: method,
    }))
    const [[currentLotteryId], [maxNumberTicketsPerBuyOrClaim]] = (await multicallv2(
      lotteryV2Abi,
      calls,
    )) as ethers.BigNumber[][]

    return {
      currentLotteryId: currentLotteryId ? currentLotteryId.toString() : null,
      maxNumberTicketsPerBuyOrClaim: maxNumberTicketsPerBuyOrClaim ? maxNumberTicketsPerBuyOrClaim.toString() : null,
    }
  } catch (error) {
    return {
      currentLotteryId: null,
      maxNumberTicketsPerBuyOrClaim: null,
    }
  }
}

export const processRawTicketsResponse = (ticketsResponse: UserTicketsResponse): LotteryTicket[] => {
  const ticketIds = ticketsResponse[0]
  const ticketNumbers = ticketsResponse[1]
  const ticketStatuses = ticketsResponse[2]

  if (ticketIds.length > 0) {
    return ticketIds.map((ticketId, index) => {
      return {
        id: ticketId.toString(),
        number: ticketNumbers[index].toString(),
        status: ticketStatuses[index],
      }
    })
  }
  return []
}

export const getViewUserTicketNumbersAndStatusesCalls = (
  totalTicketsToRequest: number,
  account: string,
  lotteryId: string,
) => {
  let cursor = 0
  const perRequestLimit = 1000
  const calls = []

  for (let i = 0; i < totalTicketsToRequest; i += perRequestLimit) {
    cursor = i
    calls.push({
      name: 'viewUserTicketNumbersAndStatusesForLottery',
      address: getLotteryV2Address(),
      params: [account, lotteryId, cursor, perRequestLimit],
    })
  }
  return calls
}

export const mergeViewUserTicketNumbersMulticallResponse = (response) => {
  const mergedMulticallResponse: UserTicketsResponse = [[], [], []]

  response.forEach((ticketResponse) => {
    mergedMulticallResponse[0].push(...ticketResponse[0])
    mergedMulticallResponse[1].push(...ticketResponse[1])
    mergedMulticallResponse[2].push(...ticketResponse[2])
  })

  return mergedMulticallResponse
}

export const fetchTickets = async (
  account: string,
  lotteryId: string,
  userRoundData?: UserRound,
): Promise<LotteryTicket[]> => {
  // If the subgraph is returning user totalTickets data for the round - use those totalTickets, if not - batch request up to 5000
  const totalTicketsToRequest = userRoundData ? parseInt(userRoundData?.totalTickets, 10) : 5000
  const calls = getViewUserTicketNumbersAndStatusesCalls(totalTicketsToRequest, account, lotteryId)
  try {
    const multicallRes = await multicallv2(lotteryV2Abi, calls, { requireSuccess: false })
    // When using a static totalTicketsToRequest value - null responses may be returned
    const filteredForNullResponses = multicallRes.filter((res) => res)
    const mergedMulticallResponse = mergeViewUserTicketNumbersMulticallResponse(filteredForNullResponses)
    const completeTicketData = processRawTicketsResponse(mergedMulticallResponse)
    return completeTicketData
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getGraphLotteries = async (): Promise<LotteryRoundGraphEntity[]> => {
  const response = await request(
    GRAPH_API_LOTTERY,
    gql`
      query getLotteries {
        lotteries(first: 100, orderDirection: desc, orderBy: block) {
          id
          totalUsers
          totalTickets
          status
          finalNumber
          winningTickets
          startTime
          endTime
          ticketPrice
          firstTicket
          lastTicket
        }
      }
    `,
  )

  const { lotteries } = response
  return lotteries
}

export const getGraphLotteryUser = async (account: string): Promise<LotteryUserGraphEntity> => {
  const response = await request(
    GRAPH_API_LOTTERY,
    gql`
      query getUserLotteryData($account: ID!) {
        user(id: $account) {
          id
          totalTickets
          totalCake
          rounds(first: 100, orderDirection: desc, orderBy: block) {
            id
            lottery {
              id
              endTime
            }
            claimed
            totalTickets
          }
        }
      }
    `,
    { account: account.toLowerCase() },
  )
  const { user } = response

  // If no subgraph response - return blank user
  if (!response || !user) {
    const blankUser = {
      account,
      totalCake: '',
      totalTickets: '',
      rounds: [],
    }

    return blankUser
  }

  const formattedUser = user && {
    account: user.id,
    totalCake: user.totalCake,
    totalTickets: user.totalTickets,
    rounds: user.rounds.map((round) => {
      return {
        lotteryId: round?.lottery?.id,
        endTime: round?.lottery?.endTime,
        claimed: round?.claimed,
        totalTickets: round?.totalTickets,
      }
    }),
  }

  return formattedUser
}