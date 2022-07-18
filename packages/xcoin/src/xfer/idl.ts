/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer",
  doc: "The `xfer` module defines a method of revocable transfers to another party.\n\nThe primary use case of this module is to be able to send coins to any address,\neven if they do not have an existing `CoinStore`.\n\nTransfers may also be revoked by the sender if its `deadline` has elapsed. This\nprevents the sender from sending coins to invalid addresses.\n\n# Lifecycle\n\n1. Call `xfer::initiate` to create a transfer of coins to another party for the given amount.\n2. Call `xfer::accept` to accept coins.\n  a. If the recipient does not want to accept the coins, call `xfer::reject` to reject the coins.",
  functions: [
    {
      name: "accept",
      doc: "Accepts a transfer.",
      ty_args: ["CoinType"],
      args: [{ name: "id", ty: "u64" }],
    },
    {
      name: "cancel",
      doc: "Cancels a transfer.",
      ty_args: ["CoinType"],
      args: [
        { name: "recipient_addr", ty: "address" },
        { name: "id", ty: "u64" },
      ],
    },
    {
      name: "initiate",
      doc: "Creates a transfer.\n\n@param deadline_duration - the duration in seconds until the transfer may be cancelled.",
      ty_args: ["CoinType"],
      args: [
        { name: "to", ty: "address" },
        { name: "amount", ty: "u64" },
        { name: "deadline_duration", ty: "u64" },
      ],
    },
  ],
  structs: [
    {
      name: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::Inbox",
      doc: "An inbox holds the incoming `Transfer`s to a given address.\nInboxes are stored on a resource account.",
      fields: [
        {
          name: "pending",
          doc: "A Table of pending transfers.",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                "u64",
                {
                  struct: {
                    name: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::Transfer",
                    ty_args: [{ type_param: 0 }],
                  },
                },
              ],
            },
          },
        },
        {
          name: "size",
          doc: "The total number of items in this inbox.\nThis is also the next unused index of the inbox.",
          ty: "u64",
        },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["key"],
    },
    {
      name: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::InboxMapping",
      doc: "A mapping of addresses to their inbox.",
      fields: [
        {
          name: "addresses",
          doc: "A Table of `recipient` -> `inbox` address.",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: ["address", "address"],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::InboxMeta",
      doc: "Metadata about an inbox account.",
      fields: [
        {
          name: "signer_cap",
          doc: "A Table of `recipient` -> `inbox` address.",
          ty: { struct: { name: "0x1::Account::SignerCapability" } },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::Transfer",
      doc: "A transfer of coins.",
      fields: [
        {
          name: "creator",
          doc: "The address which initiated this transfer.",
          ty: "address",
        },
        {
          name: "amount",
          doc: "Amount of coins transferred.",
          ty: {
            struct: { name: "0x1::Coin::Coin", ty_args: [{ type_param: 0 }] },
          },
        },
        {
          name: "deadline",
          doc: "If coins are not accepted by this time, the transfer may be cancelled.",
          ty: "u64",
        },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["store"],
    },
  ],
  errors: {
    "1": {
      name: "ECOIN_TRANSFERS_NOT_PUBLISHED",
      doc: "The `CoinTransfers` struct has not been published.",
    },
    "2": {
      name: "EUSER_NOT_PUBLISHED",
      doc: "Recipient does not have any pending transfers.",
    },
    "3": {
      name: "ETRANSFER_NOT_PUBLISHED",
      doc: "No pending transfer was found with this id.",
    },
    "4": {
      name: "ECANNOT_REFUND_NOT_CREATOR",
      doc: "Only the creator of a transfer may refund it.",
    },
    "5": {
      name: "EREFUND_DEADLINE_NOT_MET",
      doc: "Not enough time has passed since creating this transfer.",
    },
  },
} as const;
