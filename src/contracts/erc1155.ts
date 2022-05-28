import { ChainId } from '@yanrongxing/schemas'
import { ContractData } from '../types'
import { abis } from '../abis'

export const erc1155: Record<ChainId, ContractData> = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC1155',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.ETHEREUM_MAINNET]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.ETHEREUM_MAINNET
  },
  [ChainId.ETHEREUM_ROPSTEN]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.ETHEREUM_ROPSTEN
  },
  [ChainId.ETHEREUM_RINKEBY]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.ETHEREUM_RINKEBY
  },
  [ChainId.ETHEREUM_KOVAN]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.ETHEREUM_KOVAN
  },
  [ChainId.ETHEREUM_GOERLI]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.ETHEREUM_GOERLI
  },
  [ChainId.BSC_MAINNET]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '2',
    abi: abis.ERC1155,
    address: '',
    name: 'ERC271',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '2',
    abi: abis.ERC1155,
    address: '0x68b1d87f95878fe05b998f19b66f4baba5de1aed',
    name: 'ERC271',
    chainId: ChainId.TEST
  }
}
