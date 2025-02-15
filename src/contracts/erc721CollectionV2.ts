import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const erc721CollectionV2 = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.BSC_MAINNET]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.TEST
  }
}
