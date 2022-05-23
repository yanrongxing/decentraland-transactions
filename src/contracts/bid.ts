import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const bid = {
  [ChainId.ETHEREUM_ROPSTEN]: {
    version: '1',
    abi: abis.Bid,
    address: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    name: 'Decentraland Bid',
    chainId: ChainId.ETHEREUM_ROPSTEN
  },
  [ChainId.ETHEREUM_MAINNET]: {
    version: '1',
    abi: abis.Bid,
    address: '0xe479dfd9664c693b2e2992300930b00bfde08233',
    name: 'Decentraland Bid',
    chainId: ChainId.ETHEREUM_MAINNET
  },
  [ChainId.TEST]: {
    version: '1',
    abi: abis.Bid,
    address: '0x9B1c384f65E1EF6bC141AeA84f3B3955A16faAA9',
    name: 'Decentraland Bid',
    chainId: ChainId.TEST
  },
  [ChainId.BSC_MAINNET]: {
    version: '1',
    abi: abis.Bid,
    address: '0x9B1c384f65E1EF6bC141AeA84f3B3955A16faAA9',
    name: 'Decentraland Bid',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '1',
    abi: abis.Bid,
    address: '0x9B1c384f65E1EF6bC141AeA84f3B3955A16faAA9',
    name: 'Decentraland Bid',
    chainId: ChainId.BSC_TEST
  }
}
