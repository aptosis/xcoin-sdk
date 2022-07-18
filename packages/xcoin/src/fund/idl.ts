/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund",
  doc: "Funds new accounts.",
  functions: [
    {
      name: "fund_account",
      doc: "Transfers `TestCoin`.\nIf the account does not exist, it creates an account before doing so.",
      ty_args: [],
      args: [
        { name: "to", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
  ],
  structs: [],
  errors: {},
} as const;
