import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { YourScoreProps } from '../../types'
import CardUserInfo from './CardUserInfo'

const ScoreCard: React.FC<YourScoreProps> = ({ registered, account, profile }) => {
  return (
    <Card>
      <CardBody>
        <CardUserInfo registered={registered} account={account} profile={profile} />
        {!account && (
          <Flex mt="24px" justifyContent="center">
            <UnlockButton />
          </Flex>
        )}
      </CardBody>
    </Card>
  )
}

export default ScoreCard
