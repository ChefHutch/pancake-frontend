import { request, gql } from 'graphql-request'
import { GRAPH_API_LOTTERY } from 'config/constants/endpoints'

export const getPastLotteries = async (): Promise<{
  lotteries: any[]
}> => {
  const response = await request(
    GRAPH_API_LOTTERY,
    gql`
      query getLotteries {
        lotteries(first: 500) {
          id
          totalUsers
          totalTickets
          status
          winningNumbers
          winningTickets
          startTime
          endTime
          ticketPrice
        }
      }
    `,
  )

  return response
}

export const getUserPastLotteries = async (
  account: string,
): Promise<{
  users: any[]
}> => {
  const response = await request(
    GRAPH_API_LOTTERY,
    gql`
      query getUserHistory($account: ID!) {
        user(id: $account) {
          id
          totalTickets
          totalCake
        }
      }
    `,
    { account: account.toLowerCase() },
  )

  return response
}
