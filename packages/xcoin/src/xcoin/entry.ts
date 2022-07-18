/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as payloads from "./payloads.js";
/** Initializes the protocol with this module being its own signer. */
export const initialize = (): payloads.Initialize => ({
  type: "script_function_payload",
  function:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xcoin::initialize",
  type_arguments: [],
  arguments: [],
});
