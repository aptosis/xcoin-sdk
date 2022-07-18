/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin",
  doc: "xcoin is a series of eXtensions to [AptosFramework::Coin].\n\n- `xcoin::fund` creates an account if it doesn't exist before transferring `TestCoin`.\n- `xcoin::xfer` allows transferring Coins to users that may not have an account.",
  functions: [
    {
      name: "initialize",
      doc: "Initializes the protocol with this module being its own signer.",
      ty_args: [],
      args: [],
    },
  ],
  structs: [
    {
      name: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin::SelfResources",
      fields: [
        {
          name: "signer_cap",
          ty: { struct: { name: "0x1::Account::SignerCapability" } },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": { name: "ENOT_SELF", doc: "Must sign as the module." },
    "2": {
      name: "ESELF_ALREADY_PUBLISHED",
      doc: "Module has already been initialized.",
    },
  },
} as const;
