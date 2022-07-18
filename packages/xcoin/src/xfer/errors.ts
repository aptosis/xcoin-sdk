/**
 * Module errors.
 *
 * @module
 */
/** The `CoinTransfers` struct has not been published. */
export const ECOIN_TRANSFERS_NOT_PUBLISHED = {
  code: 1,
  name: "ECOIN_TRANSFERS_NOT_PUBLISHED",
  doc: "The `CoinTransfers` struct has not been published.",
} as const;

/** Recipient does not have any pending transfers. */
export const EUSER_NOT_PUBLISHED = {
  code: 2,
  name: "EUSER_NOT_PUBLISHED",
  doc: "Recipient does not have any pending transfers.",
} as const;

/** No pending transfer was found with this id. */
export const ETRANSFER_NOT_PUBLISHED = {
  code: 3,
  name: "ETRANSFER_NOT_PUBLISHED",
  doc: "No pending transfer was found with this id.",
} as const;

/** Only the creator of a transfer may refund it. */
export const ECANNOT_REFUND_NOT_CREATOR = {
  code: 4,
  name: "ECANNOT_REFUND_NOT_CREATOR",
  doc: "Only the creator of a transfer may refund it.",
} as const;

/** Not enough time has passed since creating this transfer. */
export const EREFUND_DEADLINE_NOT_MET = {
  code: 5,
  name: "EREFUND_DEADLINE_NOT_MET",
  doc: "Not enough time has passed since creating this transfer.",
} as const;
