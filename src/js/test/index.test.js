import { expect, test } from "vitest";
import { init } from "../index.js";

// 테스트용
test("add 1 + 2 to equals 3", () => {
  expect(init()).toBe(3);
});
