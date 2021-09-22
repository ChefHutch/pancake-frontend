import React from 'react'
import { Image, Flex, Text, Td } from '@pancakeswap/uikit'
import { AskOrder, Transaction, NftToken } from 'state/nftMarket/types'
import styled from 'styled-components'

const RoundedImage = styled(Image)`
  & > img {
    border-radius: ${({ theme }) => theme.radii.default};
  }
`

const GridItem = styled(Flex)`
  align-items: center;
`

interface ActivityRowProps {
  activity: Transaction | AskOrder
  nftMetadata: NftToken
}

const ActivityRow: React.FC<ActivityRowProps> = ({ activity, nftMetadata }) => {
  // Remove ? throughout when askOrderHistory nft is fixed

  console.log('wat')
  return (
    <tr>
      <Td>
        <GridItem>
          <RoundedImage src={nftMetadata?.image.thumbnail} alt={nftMetadata?.name} width={64} height={64} mx="16px" />
          <Flex flexDirection="column">
            <Text color="textSubtle" fontSize="14px">
              {nftMetadata?.collectionName || 'absent'}
            </Text>
            <Text bold>{nftMetadata?.name}</Text>
          </Flex>
        </GridItem>
      </Td>
    </tr>
  )
}

export default ActivityRow
