export enum ErrorCode {
  INVALID_ADDRESS = 'invalid_address',
  CONTRACT_ACCOUNT = 'contract_account',
  UNKNOWN = 'unknown'
}

export class MetaTransactionError extends Error {
  constructor(message: string, public code: ErrorCode) {
    super(message)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MetaTransactionError.prototype)
  }
}
