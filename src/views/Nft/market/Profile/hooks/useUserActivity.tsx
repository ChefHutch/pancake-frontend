import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useUserNfts } from 'state/nftMarket/hooks'
import { AskOrder, Transaction } from 'state/nftMarket/types'

export enum ActivityType {
  LIST = 'LIST',
  DELISTED = 'DELISTED',
  MODIFIED = 'MODIFIED',
  BOUGHT = 'BOUGHT',
  SOLD = 'SOLD',
}

/**
 * Return an array of all user activity, sorted by most recent timestamp.
 * @returns
 */
const useUserActivity = (): (Transaction | AskOrder)[] => {
  const [fetched, setFetched] = useState(false)
  const [sortedUserActivites, setSortedUserActivities] = useState<(Transaction | AskOrder)[]>([])
  const {
    activity: { askOrderHistory, buyTradeHistory, sellTradeHistory },
  } = useUserNfts()

  useEffect(() => {
    const getActivityEvent = (activity) => {
      return activity
    }

    const transformTransaction = (activities) => {
      const transformedActivities = activities.map((activity) => {
        const event = getActivityEvent(activity)
        return activity
      })

      return transformedActivities
    }

    const transformAskOrder = (activities) => {
      const transformedActivities = activities.map((activity) => {
        const event = getActivityEvent(activity)
        return activity
      })

      return transformedActivities
    }

    // This all needs reworking
    const allActivity = [...askOrderHistory, ...buyTradeHistory, ...sellTradeHistory]
    if (allActivity.length > 0) {
      const sortedByMostRecent = allActivity.sort((activityItem1, activityItem2) => {
        const timestamp1 = ethers.BigNumber.from(activityItem1.timestamp)
        const timestamp2 = ethers.BigNumber.from(activityItem2.timestamp)
        return timestamp2.sub(timestamp1).toNumber()
      })

      setSortedUserActivities(sortedByMostRecent)
    }
  }, [askOrderHistory, buyTradeHistory, sellTradeHistory])
  console.log('going mental')
  // TODO: This return is an array of different types (AskOrders & Transactions)
  // Once the UI requirements are clearer - there could be data transformation of these to return data of one type
  return sortedUserActivites
}

export default useUserActivity
