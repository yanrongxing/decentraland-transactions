import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

export const manaToken = {
  [ChainId.ETHEREUM_MAINNET]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    name: 'MANAToken',
    chainId: ChainId.ETHEREUM_MAINNET
  },
  [ChainId.ETHEREUM_ROPSTEN]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    name: 'MANAToken',
    chainId: ChainId.ETHEREUM_ROPSTEN
  },
  [ChainId.ETHEREUM_GOERLI]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    name: 'MANAToken',
    chainId: ChainId.ETHEREUM_GOERLI
  },
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x60e57e4ad9af84a2e7424a2ecb5dca0c328183ea',
    name: 'Decentraland MANA (PoS)',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x60e57e4ad9af84a2e7424a2ecb5dca0c328183ea',
    name: '(PoS) Decentraland MANA',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.BSC_MAINNET]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    name: 'MANAToken',
    chainId: ChainId.BSC_MAINNET
  },
  [ChainId.BSC_TEST]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    name: 'Decentraland MANA (PoS)',
    chainId: ChainId.BSC_TEST
  },
  [ChainId.TEST]: {
    version: '1',
    abi: abis.MANAToken,
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    name: '(PoS) Decentraland MANA',
    chainId: ChainId.TEST
  }
}
