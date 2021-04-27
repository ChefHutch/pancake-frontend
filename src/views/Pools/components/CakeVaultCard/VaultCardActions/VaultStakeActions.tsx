import React from 'react'
import { Flex, Button, useModal, Skeleton } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { Pool } from 'state/types'
import { VaultUser } from 'views/Pools/types'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import VaultStakeModal from '../VaultModals/VaultStakeModal'
import HasSharesActions from './HasSharesActions'

interface VaultStakeActionsProps {
  pool: Pool
  stakingTokenBalance: BigNumber
  stakingTokenPrice: number
  userInfo: VaultUser
  accountHasSharesStaked: boolean
  pricePerFullShare: BigNumber
  isLoading?: boolean
  account: string
  setLastUpdated: () => void
}

const VaultStakeActions: React.FC<VaultStakeActionsProps> = ({
  pool,
  stakingTokenBalance,
  stakingTokenPrice,
  userInfo,
  accountHasSharesStaked,
  pricePerFullShare,
  isLoading = false,
  account,
  setLastUpdated,
}) => {
  const { stakingToken } = pool
  const TranslateString = useI18n()

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)

  const [onPresentStake] = useModal(
    <VaultStakeModal
      account={account}
      stakingMax={stakingTokenBalance}
      pool={pool}
      stakingTokenPrice={stakingTokenPrice}
      setLastUpdated={setLastUpdated}
    />,
  )

  const renderStakeAction = () => {
    return accountHasSharesStaked ? (
      <HasSharesActions
        pool={pool}
        stakingTokenBalance={stakingTokenBalance}
        stakingTokenPrice={stakingTokenPrice}
        userInfo={userInfo}
        pricePerFullShare={pricePerFullShare}
        account={account}
        setLastUpdated={setLastUpdated}
      />
    ) : (
      <Button onClick={stakingTokenBalance.toNumber() > 0 ? onPresentStake : onPresentTokenRequired}>
        {TranslateString(1070, 'Stake')}
      </Button>
    )
  }

  return <Flex flexDirection="column">{isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()}</Flex>
}

export default VaultStakeActions
