import React from 'react'
import { LotteryTicket } from 'config/constants/types'
import { Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { parseRetreivedNumber } from '../helpers'

const StyledNumberWrapper = styled(Flex)`
  padding: 4px 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.default};
  background: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`

const TicketNumber: React.FC<LotteryTicket> = ({ id, number }) => {
  const reversedNumber = parseRetreivedNumber(number)
  const numberAsArray = reversedNumber.split('')

  return (
    <Flex flexDirection="column" mb="12px">
      <Text fontSize="12px" color="textSubtle">
        #{id}
      </Text>
      <StyledNumberWrapper>
        {numberAsArray.map((digit) => (
          <Text fontSize="16px">{digit}</Text>
        ))}
      </StyledNumberWrapper>
    </Flex>
  )
}

export default TicketNumber