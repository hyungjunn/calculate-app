import { Operators, ErrorMessages } from "./constant";

export default class Calculator {
  constructor() {
    this.buffer = "0";
    this.result = 0;
    this.previousOperator = null;
  }

  handleSymbol(symbol) {
    switch (symbol) {
      case "C":
        this.reset();
        break;

      case "←":
        if (this.buffer.length > 1) {
          this.buffer = this.buffer.slice(0, -1);
        } else {
          this.buffer = "0";
        }
        break;

      // +, -, x, ÷
      case Operators.Add:
      case Operators.Substract:
      case Operators.Multiply:
      case Operators.Divide:
        this.handleMath(symbol);
        break;

      // =
      case Operators.Equal:
        if (this.previousOperator === null) {
          return;
        }
        this.result = this.calculate(
          this.result,
          parseInt(this.buffer),
          this.previousOperator
        );
        this.buffer = "" + this.result;
        this.previousOperator = null;
        break;
    }
  }

  reset() {
    this.buffer = "0";
    this.result = 0;
    this.previousOperator = null;
  }

  handleMath(symbol) {
    const intBuffer = parseInt(this.buffer);

    if (this.previousOperator === null) {
      this.result = intBuffer;
    } else {
      this.result = this.calculate(
        this.result,
        intBuffer,
        this.previousOperator
      );
    }

    this.previousOperator = symbol;
    this.buffer = "" + this.result;
  }

  calculate(number1, number2, operator) {
    const calculateFunctions = {
      [Operators.Add]: (a, b) => a + b,
      [Operators.Substract]: (a, b) => a - b,
      [Operators.Multiply]: (a, b) => a * b,
      [Operators.Divide]: (a, b) => {
        if (b === 0) {
          throw new Error(ErrorMessages.DivideByZero);
        }
        return a / b;
      },
    };

    return calculateFunctions[operator](number1, number2);
  }

  handleNumber(value) {
    if (this.buffer === "0" || this.buffer === "" + this.result) {
      this.buffer = value;
    } else {
      this.buffer += value;
    }
    console.log(this.buffer);
  }
}
