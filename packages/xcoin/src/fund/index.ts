/**
 * Funds new accounts.
 *
 * **Module ID:** `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Payload arguments for {@link entry.fund_account}. */
export type FundAccountArgs = {
  args: {
    /** IDL type: `Address` */
    to: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS =
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a" as const;
/** The full module name. */
export const FULL_NAME =
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund" as const;
/** The name of the module. */
export const NAME = "fund" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  fund_account: {
    name: "fund_account",
    doc: "Transfers `TestCoin`.\nIf the account does not exist, it creates an account before doing so.",
    ty_args: [],
    args: [
      {
        name: "to",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Funds new accounts. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a",
  "fund"
> as typeof moduleImpl;
