import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { uniqBy } from 'lodash'
import { Flex, Text, Card, ArrowBackIcon, ArrowForwardIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { getNftsFromDifferentCollectionsApi } from 'state/nftMarket/helpers'
import { NftToken, TokenIdWithCollectionAddress } from 'state/nftMarket/types'
import { useTranslation } from 'contexts/Localization'
import useFetchUserActivity from '../../hooks/useFetchUserActivity'
import useUserActivity from '../../hooks/useUserActivity'
import ActivityRow from './ActivityRow'
import { TableRow, GridItem, TableLoader } from './TableStyles'

const PageButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 1.2em;
`

const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`

const Activity = () => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const [nftMetadata, setNftMetadata] = useState<NftToken[]>([])
  const sortedUserActivites = useUserActivity()

  useFetchUserActivity(account)

  // Can be used when paginating
  // sortedUserActivites.slice(page, itemsPerPage)

  const maxPage = 2

  useEffect(() => {
    const activityNftTokenIds =
      sortedUserActivites.length > 0
        ? uniqBy(
            sortedUserActivites.map((activity): TokenIdWithCollectionAddress => {
              // Remove if when askOrderHistory nft is fixed
              if (activity.nft) {
                return { tokenId: activity.nft.tokenId, collectionAddress: activity.nft.collection.id }
              }
              return null
            }),
            'tokenId',
          )
        : []

    // Remove filteredForNull when askOrderHistory nft is fixed
    const filteredForNull = activityNftTokenIds.filter((activity) => activity)

    const fetchMetadata = async () => {
      // Pass activityNftTokenIds when askOrderHistory nft is fixed
      const nfts = await getNftsFromDifferentCollectionsApi(filteredForNull)
      setNftMetadata(nfts)
    }

    if (activityNftTokenIds.length > 0) {
      fetchMetadata()
    }
  }, [sortedUserActivites])

  return (
    <Card>
      <TableRow>
        <GridItem>
          <Text textTransform="uppercase" color="textSubtle" bold fontSize="12px">
            {t('Item')}
          </Text>
        </GridItem>
        <GridItem justifyContent="flex-end">
          <Text textTransform="uppercase" color="textSubtle" bold fontSize="12px">
            {t('Event')}
          </Text>
        </GridItem>
        <GridItem justifyContent="flex-end">
          <Text textTransform="uppercase" color="textSubtle" bold fontSize="12px">
            {t('Price')}
          </Text>
        </GridItem>
        <GridItem justifyContent="flex-end">
          <Text textTransform="uppercase" color="textSubtle" bold fontSize="12px">
            {t('From/To')}
          </Text>
        </GridItem>
        <GridItem justifyContent="center">
          <Text textTransform="uppercase" color="textSubtle" bold fontSize="12px">
            {t('Date')}
          </Text>
        </GridItem>
      </TableRow>
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
        {sortedUserActivites.length === 0 || nftMetadata.length === 0 ? (
          <TableLoader />
        ) : (
          sortedUserActivites.map((activity) => {
            // Remove ? after activity & nft when askOrderHistory nft is fixed
            const nftMeta = nftMetadata.find((metaNft) => metaNft.tokenId === activity?.nft?.tokenId)
            return <ActivityRow activity={activity} nftMetadata={nftMeta} />
          })
        )}
        <PageButtons>
          <Arrow
            onClick={() => {
              setPage(page === 0 ? page : page - 1)
            }}
          >
            <ArrowBackIcon color={page === 1 ? 'textDisabled' : 'primary'} />
          </Arrow>
          <Text>{t('Page %page% of %maxPage%', { page, maxPage })}</Text>
          <Arrow
            onClick={() => {
              setPage(page === maxPage ? page : page + 1)
            }}
          >
            <ArrowForwardIcon color={page === maxPage ? 'textDisabled' : 'primary'} />
          </Arrow>
        </PageButtons>
      </Flex>
    </Card>
  )
}

export default Activity
