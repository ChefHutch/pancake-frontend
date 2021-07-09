import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, IconButton, ArrowForwardIcon, ArrowBackIcon, Flex, Heading, Input } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useLottery } from 'state/hooks'

const StyledInput = styled(Input)`
  width: 60px;
`

const StyledIconButton = styled(IconButton)<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled
      ? `
  background-color: red;
  color: red;
`
      : ``}
`

interface RoundSwitcherProps {
  isLoading: boolean
  activeRound: number
  mostRecentRound: number
  handleInputChange: (event: any) => void
}

const RoundSwitcher: React.FC<RoundSwitcherProps> = ({
  isLoading,
  activeRound,
  mostRecentRound,
  handleInputChange,
}) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Heading mr="8px">{t('Round')}</Heading>
        <StyledInput
          disabled={isLoading}
          id="round-id"
          name="round-id"
          type="number"
          value={activeRound}
          scale="lg"
          onChange={handleInputChange}
        />
      </Flex>
      <Flex alignItems="center">
        <StyledIconButton disabled={!activeRound} variant="text" scale="sm">
          <ArrowBackIcon />
        </StyledIconButton>
        <StyledIconButton disabled={activeRound === mostRecentRound} variant="text" scale="sm">
          <ArrowForwardIcon />
        </StyledIconButton>
      </Flex>
    </Flex>
  )
}

export default RoundSwitcher
