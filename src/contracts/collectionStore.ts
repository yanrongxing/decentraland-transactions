import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const collectionStore = {
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x6ddF1b1924DAD850AdBc1C02026535464Be06B0c',
    name: 'Decentraland Collection Store',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x214ffC0f0103735728dc66b61A22e4F163e275ae',
    name: 'Decentraland Collection Store',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.BSC_MAINNET]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x5dEE4dE340B309C4Fe59E3b73D956A4D3B272584',
    name: 'Decentraland Collection Store',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x5dEE4dE340B309C4Fe59E3b73D956A4D3B272584',
    name: 'Decentraland Collection Store',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x5dEE4dE340B309C4Fe59E3b73D956A4D3B272584',
    name: 'Decentraland Collection Store',
    chainId: ChainId.TEST
  }
}
