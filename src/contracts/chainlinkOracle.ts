import { ChainId } from '@yanrongxing/schemas'
import { abis } from '../abis'

const name = 'Decentraland ChainLink Oracle'

export const chainlinkOracle = {
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.ChainlinkOracle,
    address: '0x3195e88aE10704b359764CB38e429D24f1c2f781',
    name,
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '1',
    abi: abis.ChainlinkOracle,
    address: '0xe18B1361d41afC44658216F3Dc27e48c2336e3c2',
    name,
    chainId: ChainId.MATIC_MAINNET
  }
}
