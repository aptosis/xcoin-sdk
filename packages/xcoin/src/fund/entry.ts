/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/**
 * Transfers `TestCoin`.
 * If the account does not exist, it creates an account before doing so.
 */
export const fund_account = ({
  args,
}: mod.FundAccountArgs): payloads.FundAccount => ({
  type: "script_function_payload",
  function:
    "0x69718ef82997b31b7c1612cbc6b7eb0e3224897e631506d9675888b71f0c775a::fund::fund_account",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.to), p.serializers.u64(args.amount)],
});
