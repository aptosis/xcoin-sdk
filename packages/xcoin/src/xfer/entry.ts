/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Accepts a transfer. */
export const accept = ({
  args,
  typeArgs,
}: mod.AcceptArgs): payloads.Accept => ({
  type: "script_function_payload",
  function:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::accept",
  type_arguments: [typeArgs.CoinType],
  arguments: [p.serializers.u64(args.id)],
});

/** Cancels a transfer. */
export const cancel = ({
  args,
  typeArgs,
}: mod.CancelArgs): payloads.Cancel => ({
  type: "script_function_payload",
  function:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::cancel",
  type_arguments: [typeArgs.CoinType],
  arguments: [
    p.serializers.hexString(args.recipient_addr),
    p.serializers.u64(args.id),
  ],
});

/**
 * Creates a transfer.
 *
 * @param deadline_duration - the duration in seconds until the transfer may be cancelled.
 */
export const initiate = ({
  args,
  typeArgs,
}: mod.InitiateArgs): payloads.Initiate => ({
  type: "script_function_payload",
  function:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::xfer::initiate",
  type_arguments: [typeArgs.CoinType],
  arguments: [
    p.serializers.hexString(args.to),
    p.serializers.u64(args.amount),
    p.serializers.u64(args.deadline_duration),
  ],
});
