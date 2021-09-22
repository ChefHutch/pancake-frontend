import React from 'react'
import styled from 'styled-components'
import { Flex, Skeleton, Td } from '@pancakeswap/uikit'

const GridItem = styled(Flex)`
  align-items: center;
`

const LoadingRow: React.FC = () => (
  <tr>
    <Td>
      <GridItem>
        <Skeleton height={68} width="100%" />
      </GridItem>
    </Td>
    <Td>
      <GridItem justifyContent="flex-end">
        <Skeleton height={20} width={52} />
      </GridItem>
    </Td>
    <Td>
      <GridItem justifyContent="flex-end">
        <Skeleton height={32} width={96} />
      </GridItem>
    </Td>
    <Td>
      <GridItem justifyContent="flex-end">
        <Skeleton height={48} width={124} />
      </GridItem>
    </Td>
    <Td>
      <GridItem justifyContent="center">
        <Skeleton height={20} width={96} />
      </GridItem>
    </Td>
  </tr>
)

const TableLoader: React.FC = () => (
  <>
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
  </>
)

export default TableLoader
