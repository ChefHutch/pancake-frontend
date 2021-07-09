import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, CardFooter, Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useLottery } from 'state/hooks'
import { LotteryStatus } from 'config/constants/types'
import RoundSwitcher from './RoundSwitcher'

const StyledCard = styled(Card)`
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 320px;
  }
`

const StyledCardBody = styled(CardBody)`
  min-height: 240px;
`

const YourHistoryCard = () => {
  const { t } = useTranslation()
  const {
    currentLotteryId,
    currentRound: { status },
  } = useLottery()
  const currentLotteryIdAsInt = parseInt(currentLotteryId)
  const mostRecentFinishedRoundId =
    status === LotteryStatus.CLAIMABLE ? currentLotteryIdAsInt : currentLotteryIdAsInt - 1
  const [activeRound, setActiveRound] = useState(mostRecentFinishedRoundId)

  return (
    <StyledCard>
      <StyledCardBody>
        <RoundSwitcher
          activeRound={activeRound}
          mostRecentRound={mostRecentFinishedRoundId}
          setActiveRound={setActiveRound}
        />
      </StyledCardBody>
    </StyledCard>
  )
}

export default YourHistoryCard
