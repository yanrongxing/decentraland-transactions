import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const forwarder = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.Forwarder,
    address: '0x71e56Ad57eca3fAAe5077b7F9ea731a25785fF92',
    name: 'Forwarder',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.Forwarder,
    address: '0xBF6755A83C0dCDBB2933A96EA778E00b717d7004',
    name: 'Forwarder',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.BSC_MAINNET]: {
    version: '2',
    abi: abis.Forwarder,
    address: '0x747876A343050cB6E2742d9C0B1691fa5797c5C8',
    name: 'Forwarder',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '2',
    abi: abis.Forwarder,
    address: '0x747876A343050cB6E2742d9C0B1691fa5797c5C8',
    name: 'Forwarder',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '2',
    abi: abis.Forwarder,
    address: '0x747876A343050cB6E2742d9C0B1691fa5797c5C8',
    name: 'Forwarder',
    chainId: ChainId.TEST
  }
}
