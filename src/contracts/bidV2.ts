import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const bidV2 = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.BidV2,
    address: '0x78Dd92c8941dBC7BE54E2a9390D58aD28AD97afD',
    name: 'Decentraland Bid',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.BidV2,
    address: '0x6fd3958d1b352fd8b18ea00e3aee530d51556663',
    name: 'Decentraland Bid',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.TEST]: {
    version: '1',
    abi: abis.BidV2,
    address: '0x9B1c384f65E1EF6bC141AeA84f3B3955A16faAA9',
    name: 'Decentraland Bid',
    chainId: ChainId.TEST
  },
  [ChainId.BSC_MAINNET]: {
    version: '1',
    abi: abis.BidV2,
    address: '0x9B1c384f65E1EF6bC141AeA84f3B3955A16faAA9',
    name: 'Decentraland Bid',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '1',
    abi: abis.BidV2,
    address: '0x9B1c384f65E1EF6bC141AeA84f3B3955A16faAA9',
    name: 'Decentraland Bid',
    chainId: ChainId.BSC_TEST
  }
}
