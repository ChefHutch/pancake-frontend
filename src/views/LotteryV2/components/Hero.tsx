import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useLottery } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import { LotteryStatus } from 'state/types'
import { TicketPurchaseCard } from '../svgs'
import BuyTicketsButton from './BuyTicketsButton'

const PrizeTotalBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledBuyTicketButton = styled(BuyTicketsButton)<{ isLotteryOpen: boolean }>`
  background: ${({ theme, isLotteryOpen }) =>
    isLotteryOpen ? 'linear-gradient(180deg, #7645d9 0%, #452a7a 100%)' : theme.colors.disabled};
  width: 240px;
`

const ButtonWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-4deg);
`

const TicketSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-4deg);
`

const Hero = () => {
  const { t } = useTranslation()
  const {
    currentRound: { amountCollectedInCake, status },
  } = useLottery()

  // TODO: Re-enebale in prod
  // const cakePriceBusd = usePriceCakeBusd()
  const cakePriceBusd = new BigNumber(20)
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)
  const isLotteryOpen = status === LotteryStatus.OPEN

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Heading mb="8px" scale="md" color="#ffffff">
        {t('The PancakeSwapLottery')}
      </Heading>
      {prizeInBusd.isNaN() ? (
        <Skeleton my="7px" height={60} width={190} />
      ) : (
        <PrizeTotalBalance fontSize="64px" bold prefix="$" value={prizeTotal} mb="8px" decimals={0} />
      )}

      <Heading mb="32px" scale="lg" color="#ffffff">
        {t('in prizes!')}
      </Heading>
      <Flex position="relative" width="288px" height="113px" alignItems="center" justifyContent="center">
        <ButtonWrapper>
          <StyledBuyTicketButton isLotteryOpen={isLotteryOpen} />
        </ButtonWrapper>
        <TicketSvgWrapper>
          <TicketPurchaseCard width="288px" />
        </TicketSvgWrapper>
      </Flex>
    </Flex>
  )
}

export default Hero