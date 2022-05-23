import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const rarities = {
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.Rarities,
    address: '0x8eabF06f6cf667915bfF30138be70543bCE2901A',
    name: 'Decentraland Rarities',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '1',
    abi: abis.Rarities,
    address: '0x17113b44fdd661A156cc01b5031E3aCF72c32EB3',
    name: 'Decentraland Rarities',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.BSC_MAINNET]: {
    version: '1',
    abi: abis.Rarities,
    address: '0x5C7997dEa241c73826558a6c91316e5bf744C597',
    name: 'Decentraland Rarities',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '1',
    abi: abis.Rarities,
    address: '0x5C7997dEa241c73826558a6c91316e5bf744C597',
    name: 'Decentraland Rarities',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '1',
    abi: abis.Rarities,
    address: '0x5C7997dEa241c73826558a6c91316e5bf744C597',
    name: 'Decentraland Rarities',
    chainId: ChainId.TEST
  }
}
