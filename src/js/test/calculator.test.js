import { expect, test } from "vitest";
import Calculator from "../calculator";

test("add 1 + 2 to equals 3", () => {
  const calculator = new Calculator();
  expect(calculator.calculate(1, 2, "+")).toBe(3);
});

test("sub 1 - 2 to equals -1", () => {
  const calculator = new Calculator();
  expect(calculator.calculate(1, 2, "-")).toBe(-1);
});

test("multiple 1 * 2 to equals 2", () => {
  const calculator = new Calculator();
  expect(calculator.calculate(1, 2, "x")).toBe(2);
});

test("divide 1 ÷ 2 to equals 0.5", () => {
  const calculator = new Calculator();
  expect(calculator.calculate(1, 2, "÷")).toBe(0.5);
});

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
