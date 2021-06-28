import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Skeleton, useModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useNextEventCountdown from 'hooks/lottery/v2/useNextEventCountdown'
import useGetNextLotteryEvent from 'hooks/lottery/v2/useGetNextLotteryEvent'
import { useAppDispatch } from 'state'
import { useFetchLottery, useGetPastLotteries, useGetUserLotteryHistory, useLottery } from 'state/hooks'
import { fetchCurrentLottery, fetchNextLottery, fetchPublicLotteryData } from 'state/lottery'
import fetchUnclaimedUserRewards from 'state/lottery/fetchUnclaimedUserRewards'
import { TITLE_BG, GET_TICKETS_BG, FINISHED_ROUNDS_BG, FINISHED_ROUNDS_BG_DARK } from './pageSectionStyles'
import Hero from './components/Hero'
import DrawInfoCard from './components/DrawInfoCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import ClaimModal from './components/ClaimModal'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
`

const TicketsSection = styled(PageSection)`
  margin-top: -32px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: -64px;
  }
`

const LotteryV2 = () => {
  useFetchLottery()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()
  const { isDark, theme } = useTheme()
  const {
    currentLotteryId,
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const secondsRemaining = useNextEventCountdown(nextEventTime)
  const userLotteryHistory = useGetUserLotteryHistory()
  const pastLotteries = useGetPastLotteries()
  const [unclaimedRewards, setUnclaimedRewards] = useState([])
  const [hasPoppedClaimModal, setHasPoppedClaimModal] = useState(false)
  const [onPresentClaimModal] = useModal(<ClaimModal roundsToClaim={unclaimedRewards} />)

  useEffect(() => {
    // Check if user has rewards on page load and account change
    const fetchRewards = async () => {
      const unclaimedRewardsResponse = await fetchUnclaimedUserRewards(
        account,
        currentLotteryId,
        userLotteryHistory,
        pastLotteries,
      )
      setUnclaimedRewards(unclaimedRewardsResponse)
    }
    if (userLotteryHistory && account && currentLotteryId && pastLotteries) {
      fetchRewards()
    }
  }, [account, userLotteryHistory, currentLotteryId, pastLotteries, setUnclaimedRewards])

  useEffect(() => {
    // Manage showing unclaimed rewards modal
    if (unclaimedRewards.length > 0 && !hasPoppedClaimModal) {
      setHasPoppedClaimModal(true)
      onPresentClaimModal()
    }
  }, [unclaimedRewards, hasPoppedClaimModal, onPresentClaimModal])

  // Data fetches for lottery phase transitions
  useEffect(() => {
    const nextLotteryId = parseInt(currentLotteryId, 10) + 1
    // Current lottery transitions from open > closed, or closed > claimable
    if ((status === LotteryStatus.OPEN || status === LotteryStatus.CLOSE) && secondsRemaining === 0) {
      dispatch(fetchCurrentLottery({ currentLotteryId }))
      dispatch(fetchNextLottery({ nextLotteryId: nextLotteryId.toString() }))
      console.log('fetching current & next lottery')
    }

    // Next lottery starting
    if (status === LotteryStatus.CLAIMABLE && secondsRemaining === 0) {
      // Populate current lottery state with next lottery data
      dispatch(fetchCurrentLottery({ currentLotteryId: nextLotteryId.toString() }))
      // Get new 'currentLotteryId' from SC
      dispatch(fetchPublicLotteryData())
      console.log('currentLotteryId >', currentLotteryId)
      console.log('nextLotteryId >', nextLotteryId)
      console.log('fetching next lottery & updating currentLotteryId')
    }
  }, [secondsRemaining, currentLotteryId, status, dispatch])

  console.log('status~', status)

  return (
    <LotteryPage>
      <PageSection background={TITLE_BG} svgFill={theme.colors.overlay} index={3}>
        <Hero />
      </PageSection>
      <TicketsSection background={GET_TICKETS_BG} hasCurvedDivider={false} index={2}>
        <Flex flexDirection="column">
          {status === LotteryStatus.OPEN && (
            <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
              {t('Get your tickets now!')}
            </Heading>
          )}
          <Flex alignItems="center" justifyContent="center" mb="48px">
            {secondsRemaining && (postCountdownText || preCountdownText) ? (
              <Countdown
                secondsRemaining={secondsRemaining}
                postCountdownText={postCountdownText}
                preCountdownText={preCountdownText}
              />
            ) : (
              <Skeleton height="41px" width="250px" />
            )}
          </Flex>
          <DrawInfoCard />
        </Flex>
      </TicketsSection>
      <PageSection
        background={isDark ? FINISHED_ROUNDS_BG_DARK : FINISHED_ROUNDS_BG}
        hasCurvedDivider={false}
        index={1}
      >
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading mb="24px" scale="xl">
            {t('Finished Rounds')}
          </Heading>
          <Box mb="24px">
            <HistoryTabMenu
              activeIndex={historyTabMenuIndex}
              setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
            />
          </Box>
          {historyTabMenuIndex === 0 ? <YourHistoryCard /> : <span>😢</span>}
        </Flex>
      </PageSection>
      <PageSection hasCurvedDivider={false} index={0}>
        <Flex>
          <img src="/images/lottery/tombola.png" alt="tombola bunny" height="auto" width="240px" />
        </Flex>
      </PageSection>
    </LotteryPage>
  )
}

export default LotteryV2
