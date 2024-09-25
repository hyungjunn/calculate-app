import { expect, test } from "vitest";
import Calculator from "../calculator";

test("divide by zero is throw error", () => {
  const calculator = new Calculator();
  expect(() => calculator.calculate(1, 0, "÷")).toThrowError(
    "0으로 나눌 수는 없습니다."
  );
});

test("reset calculate-app", () => {
  const calculator = new Calculator();
  calculator.calculate(1, 2, "x");
  calculator.reset();
  expect(calculator.buffer).toBe("0");
  expect(calculator.result).toBe(0);
  expect(calculator.previousOperator).toBeNull;
});

test.each([
  { a: 1, b: 2, expected: 3 },
  { a: 999, b: 999, expected: 1998 },
])("add($a, $b) -> $expected", ({ a, b, expected }) => {
  const calculator = new Calculator();
  expect(calculator.calculate(a, b, "+")).toBe(expected);
});

test.each([
  { a: 1, b: 2, expected: -1 },
  { a: 0, b: 999, expected: -999 },
])("sub($a, $b) -> $expected", ({ a, b, expected }) => {
  const calculator = new Calculator();
  expect(calculator.calculate(a, b, "-")).toBe(expected);
});

test.each([
  { a: 1, b: 2, expected: 2 },
  { a: 0, b: 999, expected: 0 },
  { a: -3, b: -4, expected: 12 },
  { a: -9, b: 3, expected: -27 },
])("multiple($a, $b) -> $expected", ({ a, b, expected }) => {
  const calculator = new Calculator();
  expect(calculator.calculate(a, b, "x")).toBe(expected);
});

test.each([
  { a: 1, b: 2, expected: 0.5 },
  { a: 0, b: 999, expected: 0 },
  { a: -4, b: 2, expected: -2 },
])("divide($a, $b) -> $expected", ({ a, b, expected }) => {
  const calculator = new Calculator();
  expect(calculator.calculate(a, b, "÷")).toBe(expected);
});
