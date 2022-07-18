/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::accept`.
 *
 * Accepts a transfer.
 */
export type Accept = {
  readonly type: "script_function_payload";
  readonly function: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::accept";
  readonly arguments: [id: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::cancel`.
 *
 * Cancels a transfer.
 */
export type Cancel = {
  readonly type: "script_function_payload";
  readonly function: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::cancel";
  readonly arguments: [recipient_addr: string, id: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::initiate`.
 *
 * Creates a transfer.
 *
 * @param deadline_duration - the duration in seconds until the transfer may be cancelled.
 */
export type Initiate = {
  readonly type: "script_function_payload";
  readonly function: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::initiate";
  readonly arguments: [to: string, amount: string, deadline_duration: string];
  readonly type_arguments: [CoinType: string];
};
