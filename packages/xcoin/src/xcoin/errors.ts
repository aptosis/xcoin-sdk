/**
 * Module errors.
 *
 * @module
 */
/** Must sign as the module. */
export const ENOT_SELF = {
  code: 1,
  name: "ENOT_SELF",
  doc: "Must sign as the module.",
} as const;

/** Module has already been initialized. */
export const ESELF_ALREADY_PUBLISHED = {
  code: 2,
  name: "ESELF_ALREADY_PUBLISHED",
  doc: "Module has already been initialized.",
} as const;
