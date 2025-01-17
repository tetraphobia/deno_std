// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

import { notEquals } from "./not_equals.ts";
import { SemVer } from "./types.ts";

/**
 * Not equal comparison
 *
 * @deprecated (will be removed after 0.213.0) Use {@linkcode notEquals} instead.
 */
export function neq(s0: SemVer, s1: SemVer): boolean {
  return notEquals(s0, s1);
}
