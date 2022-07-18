/**
 * xcoin is a series of eXtensions to [AptosFramework::Coin].
 *
 * - `xcoin::fund` creates an account if it doesn't exist before transferring `TestCoin`.
 * - `xcoin::xfer` allows transferring Coins to users that may not have an account.
 *
 * **Module ID:** `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type SelfResourcesData = {
  signer_cap: {
    account: p.RawAddress;
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
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin" as const;
/** The name of the module. */
export const NAME = "xcoin" as const;

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
    name: "ENOT_SELF",
    doc: "Must sign as the module.",
  },
  "2": {
    name: "ESELF_ALREADY_PUBLISHED",
    doc: "Module has already been initialized.",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  initialize: {
    name: "initialize",
    doc: "Initializes the protocol with this module being its own signer.",
    ty_args: [],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  SelfResources:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin::SelfResources",
} as const;

/** All struct types. */
export const structs = {
  SelfResources:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin::SelfResources",
} as const;

/** Payload generators for module `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * xcoin is a series of eXtensions to [AptosFramework::Coin].
 *
 * - `xcoin::fund` creates an account if it doesn't exist before transferring `TestCoin`.
 * - `xcoin::xfer` allows transferring Coins to users that may not have an account.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a",
  "xcoin"
> as typeof moduleImpl;
