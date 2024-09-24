let $screen = document.querySelector(".screen");

let buffer = "0";
let result = 0;
let previousOperator = null;

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    try {
      handleNumber(value);
    } catch (e) {
      alert(e.message);
      resetCalculate();
    }
  }

  $screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      resetCalculate();
      break;

    case "←":
      if (buffer.length > 1) {
        buffer = buffer.slice(0, -1);
      } else {
        buffer = "0";
      }
      break;

    case "+":
    case "-":
    case "x":
    case "÷":
      handleMath(symbol);
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }
      calculateResult(parseInt(buffer));
      buffer = "" + result;
      previousOperator = null;
      break;
  }
}

function resetCalculate() {
  buffer = "0";
  result = 0;
  previousOperator = null;
}

function handleMath(symbol) {
  const intBuffer = parseInt(buffer);

  if (previousOperator === null) {
    result = intBuffer;
  } else {
    calculateResult(intBuffer);
  }

  previousOperator = symbol;
  buffer = "" + result;
  console.log(result);
}

function calculateResult(intBuffer) {
  if ("+" === previousOperator) {
    result += intBuffer;
  } else if ("-" === previousOperator) {
    result -= intBuffer;
  } else if ("x" === previousOperator) {
    result *= intBuffer;
  } else if ("÷" === previousOperator) {
    result /= intBuffer;
  }
}

function handleNumber(value) {
  if (buffer === "0" || buffer === "" + result) {
    if (previousOperator === "÷") {
      throw new Error("0으로 나눌 수는 없습니다.");
    }
    buffer = value;
  } else {
    buffer += value;
  }
  console.log(buffer);
}

function init() {
  document
    .querySelector(".calculator-buttons")
    .addEventListener("click", (event) => {
      buttonClick(event.target.innerText);
    });
}

init();
