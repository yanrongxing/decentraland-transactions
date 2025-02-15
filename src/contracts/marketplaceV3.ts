import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const marketplaceV3 = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.MarketplaceV3,
    address: '0x5A467398dfa9d5C663a656423A2D055f538198A4',
    name: 'Decentraland Marketplace',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.MarketplaceV3,
    address: '0x91f6d91c1345707D57212371cFf12A62709E43BF',
    name: 'Decentraland Marketplace',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.BSC_MAINNET]: {
    version: '1',
    abi: abis.MarketplaceV3,
    address: '0x5fc8d32690cc91d4c39d9d3abcbd16989f875707',
    name: 'Decentraland Marketplace',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '1',
    abi: abis.MarketplaceV3,
    address: '0x5fc8d32690cc91d4c39d9d3abcbd16989f875707',
    name: 'Decentraland Marketplace',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '1',
    abi: abis.MarketplaceV3,
    address: '0x5fc8d32690cc91d4c39d9d3abcbd16989f875707',
    name: 'Decentraland Marketplace',
    chainId: ChainId.TEST
  }
}
