export class UiController {
  constructor(calculator, screenElement) {
    this.calculator = calculator;
    this.screenElement = screenElement;
  }

  init() {
    document
      .querySelector(".calculator-buttons")
      .addEventListener("click", (event) => {
        this.buttonClick(event.target.innerText);
      });
  }

  buttonClick(value) {
    if (isNaN(parseInt(value))) {
      this.calculator.handleSymbol(value);
    } else {
      try {
        this.calculator.handleNumber(value);
      } catch (e) {
        alert(e.message);
        this.calculator.reset();
      }
    }

    this.updateScreen();
  }

  updateScreen() {
    this.screenElement.innerText = this.calculator.buffer;
  }
}
