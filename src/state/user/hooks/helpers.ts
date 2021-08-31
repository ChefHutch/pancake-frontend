import { Token } from '@pancakeswap/sdk'
import { DeserializedTokenWithPrice, SerializedToken, SerializedTokenWithPrice } from 'config/constants/types'
import { parseUnits } from 'ethers/lib/utils'

// TODO: Fix Types here - remove SerializedTokenWithPrice when Farms typing is fixed
export function serializeToken(token: Token | DeserializedTokenWithPrice | SerializedTokenWithPrice): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
    // TODO: Add projectLink
  }
}

export function deserializeToken(serializedToken: SerializedToken): Token {
  return new Token(
    serializedToken.chainId,
    serializedToken.address,
    serializedToken.decimals,
    serializedToken.symbol,
    serializedToken.name,
    // TODO: Add projectLink
  )
}

export enum GAS_PRICE {
  default = '5',
  fast = '6',
  instant = '7',
  testnet = '10',
}

export const GAS_PRICE_GWEI = {
  default: parseUnits(GAS_PRICE.default, 'gwei').toString(),
  fast: parseUnits(GAS_PRICE.fast, 'gwei').toString(),
  instant: parseUnits(GAS_PRICE.instant, 'gwei').toString(),
  testnet: parseUnits(GAS_PRICE.testnet, 'gwei').toString(),
}
