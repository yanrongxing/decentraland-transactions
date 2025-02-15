export enum ErrorCode {
  INVALID_ADDRESS = 'invalid_address',
  CONTRACT_ACCOUNT = 'contract_account',
  SALE_PRICE_TOO_LOW = 'sale_price_too_low',
  USER_DENIED = 'user_denied',
  UNKNOWN = 'unknown'
}

export class MetaTransactionError extends Error {
  constructor(message: string, public code: ErrorCode) {
    super(message)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MetaTransactionError.prototype)
  }
}
