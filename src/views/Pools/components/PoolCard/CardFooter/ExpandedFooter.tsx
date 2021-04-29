import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import { Flex, MetamaskIcon, Text, LinkExternal, TimerIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { BASE_BSC_SCAN_URL, BASE_URL } from 'config'
import { useBlock } from 'state/hooks'
import { Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import { registerToken } from 'utils/wallet'
import Balance from 'components/Balance'

interface ExpandedFooterProps {
  pool: Pool
  account: string
  performanceFee?: number
  isAutoVault?: boolean
  totalCakeInVault?: BigNumber
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const ExpandedFooter: React.FC<ExpandedFooterProps> = ({
  pool,
  account,
  performanceFee = 0,
  isAutoVault = false,
  totalCakeInVault,
}) => {
  const TranslateString = useI18n()
  const { currentBlock } = useBlock()
  const { stakingToken, earningToken, totalStaked, startBlock, endBlock, isFinished, contractAddress } = pool

  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''
  const poolContractAddress = getAddress(contractAddress)
  const imageSrc = `${BASE_URL}/images/tokens/${earningToken.symbol.toLowerCase()}.png`
  const isMetaMaskInScope = !!(window as WindowChain).ethereum?.isMetaMask

  const shouldShowBlockCountdown = Boolean(!isFinished && startBlock && endBlock)
  const blocksUntilStart = Math.max(startBlock - currentBlock, 0)
  const blocksRemaining = Math.max(endBlock - currentBlock, 0)
  const hasPoolStarted = blocksUntilStart === 0 && blocksRemaining > 0

  return (
    <ExpandedWrapper flexDirection="column">
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        <Text fontSize="14px">{TranslateString(999, 'Total staked:')}</Text>
        <Flex alignItems="flex-start">
          {/* For autoVault, should totalStaked come from total shares, or the CAKE pool? */}
          {totalStaked ? (
            <>
              <Balance
                fontSize="14px"
                value={
                  isAutoVault
                    ? getBalanceNumber(totalCakeInVault, stakingToken.decimals)
                    : getBalanceNumber(totalStaked, stakingToken.decimals)
                }
              />
              <Text ml="4px" fontSize="14px">
                {stakingToken.symbol}
              </Text>
            </>
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
        </Flex>
      </Flex>
      {shouldShowBlockCountdown && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          <Text fontSize="14px">{hasPoolStarted ? TranslateString(410, 'End') : TranslateString(1212, 'Start')}:</Text>
          <Flex alignItems="center">
            {blocksRemaining || blocksUntilStart ? (
              <Balance
                color="primary"
                fontSize="14px"
                value={hasPoolStarted ? blocksRemaining : blocksUntilStart}
                decimals={0}
              />
            ) : (
              <Skeleton width="54px" height="21px" />
            )}
            <Text ml="4px" color="primary" fontSize="14px">
              {TranslateString(999, 'blocks')}
            </Text>
            <TimerIcon ml="4px" color="primary" />
          </Flex>
        </Flex>
      )}
      {isAutoVault && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          <Text fontSize="14px">{TranslateString(999, 'Performance Fee')}</Text>
          <Flex alignItems="center">
            <Text ml="4px" fontSize="14px">
              {performanceFee / 100}%
            </Text>
          </Flex>
        </Flex>
      )}
      <Flex mb="2px" justifyContent="flex-end">
        <LinkExternal bold={false} fontSize="14px" href={earningToken.projectLink}>
          {TranslateString(412, 'View Project Site')}
        </LinkExternal>
      </Flex>
      {!isAutoVault && poolContractAddress && (
        <Flex mb="2px" justifyContent="flex-end">
          <LinkExternal bold={false} fontSize="14px" href={`${BASE_BSC_SCAN_URL}/address/${poolContractAddress}`}>
            {TranslateString(412, 'View Contract')}
          </LinkExternal>
        </Flex>
      )}
      {account && isMetaMaskInScope && tokenAddress && (
        <Flex justifyContent="flex-end">
          <Text
            color="primary"
            fontSize="14px"
            onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals, imageSrc)}
          >
            Add to Metamask
          </Text>
          <MetamaskIcon ml="4px" />
        </Flex>
      )}
    </ExpandedWrapper>
  )
}

export default React.memo(ExpandedFooter)
