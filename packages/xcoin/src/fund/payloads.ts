/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund::fund_account`.
 *
 * Transfers `TestCoin`.
 * If the account does not exist, it creates an account before doing so.
 */
export type FundAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund::fund_account";
  readonly arguments: [to: string, amount: string];
  readonly type_arguments: [];
};
