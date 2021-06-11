import BigNumber from 'bignumber.js'
import { request, gql } from 'graphql-request'
import { GRAPH_API_LOTTERY } from 'config/constants/endpoints'
import { LotteryStatus, LotteryTicket } from 'config/constants/types'
import { UserLotteryHistory, PastLotteryRound } from 'state/types'
import { getLotteryV2Contract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'

interface RoundTicketsAndWinningNumbers {
  roundId: string
  userTickets: LotteryTicket[]
  winningNumbers: string
}

const lotteryContract = getLotteryV2Contract()

export const fetchLottery = async (lotteryId: string) => {
  try {
    const lotteryData = await lotteryContract.methods.lotteries(lotteryId).call()
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
    } = lotteryData
    const priceTicketInCakeAsBN = new BigNumber(priceTicketInCake as string)
    const amountCollectedInCakeAsBN = new BigNumber(amountCollectedInCake as string)
    const statusKey = Object.keys(LotteryStatus)[status]
    return {
      isLoading: false,
      status: LotteryStatus[statusKey],
      startTime,
      endTime,
      priceTicketInCake: priceTicketInCakeAsBN.toJSON(),
      discountDivisor,
      treasuryFee,
      firstTicketId,
      lastTicketId,
      amountCollectedInCake: amountCollectedInCakeAsBN.toJSON(),
      finalNumber,
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
    }
  }
}

export const fetchPublicData = async () => {
  try {
    const [currentLotteryId, maxNumberTicketsPerBuy] = (await makeBatchRequest([
      lotteryContract.methods.currentLotteryId().call,
      lotteryContract.methods.maxNumberTicketsPerBuy().call,
    ])) as [string, string]
    return {
      currentLotteryId,
      maxNumberTicketsPerBuy,
    }
  } catch (error) {
    return {
      currentLotteryId: null,
      maxNumberTicketsPerBuy: null,
    }
  }
}

const processRawTicketData = (rawTicketResponse): LotteryTicket[] => {
  const ticketIds = rawTicketResponse[0]
  const ticketNumbers = rawTicketResponse[1]
  const ticketStatuses = rawTicketResponse[2]

  return ticketIds.map((ticketId, index) => {
    return {
      id: ticketId,
      number: ticketNumbers[index],
      status: ticketStatuses[index],
    }
  })
}

export const fetchTickets = async (account: string, lotteryId: string, cursor: number): Promise<LotteryTicket[]> => {
  try {
    const userTickets = await lotteryContract.methods
      .viewUserTicketNumbersAndStatusesForLottery(account, lotteryId, cursor, 1000)
      .call()
    const completeTicketData = processRawTicketData(userTickets)
    return completeTicketData
  } catch (error) {
    return null
  }
}

const validateWinningTickets = async (winningTickets) => {
  const calls = winningTickets.map((winningTicket) => {
    const { roundId, ticketId, bracket } = winningTicket
    console.log(roundId, ticketId, bracket)
    return lotteryContract.methods.viewRewardsForTicketId(roundId, ticketId, bracket).call
  })

  const rewards = await makeBatchRequest(calls)
  // debugger // eslint-disable-line
}

const getRewardBracket = (ticketNumber: string, winningNumbers: string): number => {
  const ticketNumAsArray = ticketNumber.split('')
  const winningNumsAsArray = winningNumbers.split('')
  const matchingNumbers = []

  // The number at index 0 in all tickets is 1 and will always match, so start at index 1
  for (let index = 1; index < winningNumsAsArray.length; index++) {
    if (ticketNumAsArray[index] === winningNumsAsArray[index]) {
      matchingNumbers.push(ticketNumAsArray[index])
    } else {
      break
    }
  }

  // Reward brackets refer to indexes, 0 = 1 match, 5 = 6 matches. Deduct 1 from matchingNumbers' length to get the reward bracket
  const rewardBracket = matchingNumbers.length - 1
  return rewardBracket
}

const getWinningTickets = (roundTicketsAndWinningNumbers: RoundTicketsAndWinningNumbers) => {
  const { roundId, userTickets, winningNumbers } = roundTicketsAndWinningNumbers

  const ticketsWithRewardBrackets = userTickets.map((ticket) => {
    return {
      roundId,
      ticketId: ticket.id,
      number: ticket.number,
      bracket: getRewardBracket(ticket.number, winningNumbers),
    }
  })

  const winningTickets = ticketsWithRewardBrackets.filter((ticket) => {
    // ticket.bracket -1 = no matches. 0 and above means there has been a match
    return ticket.bracket >= 0
  })

  if (winningTickets.length > 0) {
    const validatedTickets = validateWinningTickets(winningTickets)
  }

  // return {lotteryId, ticketId, bracket (1-6)}
  return ''
}

const getWinningNumbersForRound = (targetRoundId: string, pastLotteries: PastLotteryRound[]) => {
  const targetRound = pastLotteries.find((pastLottery) => pastLottery.id === targetRoundId)
  return targetRound?.winningNumbers
}

export const deepCheckUserHasRewards = async (
  account: string,
  currentLotteryId: string,
  userLotteryHistory: UserLotteryHistory,
  pastLotteries: PastLotteryRound[],
): Promise<any> => {
  const { pastRounds } = userLotteryHistory
  const cursor = 0
  const limit = 1000

  const filteredForCurrentRound = pastRounds.filter((round) => {
    return round.lotteryId !== currentLotteryId
  })

  const filteredForAlreadyClaimed = filteredForCurrentRound.filter((round) => {
    return !round.claimed
  })

  const calls = filteredForAlreadyClaimed.map(
    (round) =>
      lotteryContract.methods.viewUserTicketNumbersAndStatusesForLottery(account, round.lotteryId, cursor, limit).call,
  )
  const roundIds = filteredForAlreadyClaimed.map((round) => round.lotteryId)
  const rawTicketData = await makeBatchRequest(calls)
  const roundTicketsAndWinningNumbers = rawTicketData.map((roundTicketData, index): RoundTicketsAndWinningNumbers => {
    return {
      roundId: roundIds[index],
      userTickets: processRawTicketData(roundTicketData),
      winningNumbers: getWinningNumbersForRound(roundIds[index], pastLotteries),
    }
  })

  const test = getWinningTickets(roundTicketsAndWinningNumbers[0])

  return account
}

export const getPastLotteries = async (): Promise<PastLotteryRound[]> => {
  const response = await request(
    GRAPH_API_LOTTERY,
    gql`
      query getLotteries {
        lotteries(first: 1000) {
          id
          totalUsers
          totalTickets
          status
          winningNumbers
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

export const getUserPastLotteries = async (account: string): Promise<UserLotteryHistory> => {
  const response = await request(
    GRAPH_API_LOTTERY,
    gql`
      query getUserHistory($account: ID!) {
        user(id: $account) {
          totalTickets
          totalCake
          participation {
            lottery {
              id
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

  // TODO: req should just match desired format rather than reformating
  const formattedUser = user && {
    totalCake: user.totalCake,
    totalTickets: user.totalTickets,
    pastRounds: user.participation.map((round) => {
      return {
        lotteryId: round?.lottery?.id,
        claimed: round?.claimed,
        totalTickets: round?.totalTickets,
      }
    }),
  }
  return formattedUser
}
