import React, { useState } from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Flex, CardFooter, ExpandableLabel } from '@pancakeswap-libs/uikit'
import { Pool } from 'state/types'
import { CompoundingPoolTag, ManualPoolTag } from 'components/Tags'
import ExpandedFooter from './ExpandedFooter'

interface FooterProps {
  pool: Pool
  account: string
  performanceFee?: number
  isAutoVault?: boolean
}

const ExpandableButtonWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0;
  }
`

const Footer: React.FC<FooterProps> = ({ pool, account, performanceFee, isAutoVault = false }) => {
  const TranslateString = useI18n()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <CardFooter>
      <ExpandableButtonWrapper>
        {isAutoVault ? <CompoundingPoolTag /> : <ManualPoolTag />}
        <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? TranslateString(1066, 'Hide') : TranslateString(658, 'Details')}
        </ExpandableLabel>
      </ExpandableButtonWrapper>
      {isExpanded && <ExpandedFooter pool={pool} account={account} />}
    </CardFooter>
  )
}

export default Footer