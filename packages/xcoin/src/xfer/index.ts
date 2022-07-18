/**
 * The `xfer` module defines a method of revocable transfers to another party.
 *
 * The primary use case of this module is to be able to send coins to any address,
 * even if they do not have an existing `CoinStore`.
 *
 * Transfers may also be revoked by the sender if its `deadline` has elapsed. This
 * prevents the sender from sending coins to invalid addresses.
 *
 * # Lifecycle
 *
 * 1. Call `xfer::initiate` to create a transfer of coins to another party for the given amount.
 * 2. Call `xfer::accept` to accept coins.
 *   a. If the recipient does not want to accept the coins, call `xfer::reject` to reject the coins.
 *
 * **Module ID:** `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * An inbox holds the incoming `Transfer`s to a given address.
 * Inboxes are stored on a resource account.
 */
export type InboxData = {
  /** A Table of pending transfers. */
  pending: {
    handle: p.U128;
    length: p.U64;
  };

  /**
   * The total number of items in this inbox.
   * This is also the next unused index of the inbox.
   */
  size: p.U64;
};

/** A mapping of addresses to their inbox. */
export type InboxMappingData = {
  /** A Table of `recipient` -> `inbox` address. */
  addresses: {
    handle: p.U128;
    length: p.U64;
  };
};

/** Metadata about an inbox account. */
export type InboxMetaData = {
  /** A Table of `recipient` -> `inbox` address. */
  signer_cap: {
    account: p.RawAddress;
  };
};

/** A transfer of coins. */
export type TransferData = {
  /** The address which initiated this transfer. */
  creator: p.RawAddress;

  /** Amount of coins transferred. */
  amount: {
    /** Amount of coin this address has. */
    value: p.U64;
  };

  /** If coins are not accepted by this time, the transfer may be cancelled. */
  deadline: p.U64;
};

/** Payload arguments for {@link entry.accept}. */
export type AcceptArgs = {
  args: {
    /** IDL type: `U64` */
    id: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.cancel}. */
export type CancelArgs = {
  args: {
    /** IDL type: `Address` */
    recipient_addr: p.RawAddress;
    /** IDL type: `U64` */
    id: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.initiate}. */
export type InitiateArgs = {
  args: {
    /** IDL type: `Address` */
    to: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
    /** IDL type: `U64` */
    deadline_duration: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS =
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a" as const;
/** The full module name. */
export const FULL_NAME =
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer" as const;
/** The name of the module. */
export const NAME = "xfer" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
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
} as const;

/** All module function IDLs. */
export const functions = {
  accept: {
    name: "accept",
    doc: "Accepts a transfer.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "id",
        ty: "u64",
      },
    ],
  },
  cancel: {
    name: "cancel",
    doc: "Cancels a transfer.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "recipient_addr",
        ty: "address",
      },
      {
        name: "id",
        ty: "u64",
      },
    ],
  },
  initiate: {
    name: "initiate",
    doc: "Creates a transfer.\n\n@param deadline_duration - the duration in seconds until the transfer may be cancelled.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "to",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
      {
        name: "deadline_duration",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Inbox:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::Inbox",
  InboxMapping:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::InboxMapping",
  InboxMeta:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::InboxMeta",
} as const;

/** All struct types. */
export const structs = {
  Inbox:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::Inbox",
  InboxMapping:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::InboxMapping",
  InboxMeta:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::InboxMeta",
  Transfer:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::Transfer",
} as const;

/** Payload generators for module `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * The `xfer` module defines a method of revocable transfers to another party.
 *
 * The primary use case of this module is to be able to send coins to any address,
 * even if they do not have an existing `CoinStore`.
 *
 * Transfers may also be revoked by the sender if its `deadline` has elapsed. This
 * prevents the sender from sending coins to invalid addresses.
 *
 * # Lifecycle
 *
 * 1. Call `xfer::initiate` to create a transfer of coins to another party for the given amount.
 * 2. Call `xfer::accept` to accept coins.
 *   a. If the recipient does not want to accept the coins, call `xfer::reject` to reject the coins.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a",
  "xfer"
> as typeof moduleImpl;
