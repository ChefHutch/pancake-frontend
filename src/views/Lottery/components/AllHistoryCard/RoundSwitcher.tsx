import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, CardFooter, Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useLottery } from 'state/hooks'

const StyledCard = styled(Card)`
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 320px;
  }
`

const RoundSwitcher = styled(CardBody)`
  min-height: 240px;
`

interface RoundSwitcherProps {
  activeRound: number
  mostRecentRound: number
  setActiveRound: React.Dispatch<React.SetStateAction<number>>
}

const YourHistoryCard: React.FC<RoundSwitcherProps> = ({ activeRound, mostRecentRound, setActiveRound }) => {
  const { t } = useTranslation()

  return (
    <Flex>
      <div> wat wat</div>
    </Flex>
  )
}

export default YourHistoryCard
