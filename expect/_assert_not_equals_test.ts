// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

// This file is copied from `std/assert`.

import { assert, AssertionError } from "../assert/mod.ts";
import { assertEquals } from "./_assert_equals.ts";
import { assertNotEquals } from "./_assert_not_equals.ts";

Deno.test("NotEquals", function () {
  const a = { foo: "bar" };
  const b = { bar: "foo" };
  assertNotEquals<unknown>(a, b);
  assertNotEquals("Denosaurus", "Tyrannosaurus");
  assertNotEquals(
    new Date(2019, 0, 3, 4, 20, 1, 10),
    new Date(2019, 0, 3, 4, 20, 1, 20),
  );
  assertNotEquals(new Date("invalid"), new Date(2019, 0, 3, 4, 20, 1, 20));
  let didThrow;
  try {
    assertNotEquals("Raptor", "Raptor");
    didThrow = false;
  } catch (e) {
    assert(e instanceof AssertionError);
    didThrow = true;
  }
  assertEquals(didThrow, true);
});
