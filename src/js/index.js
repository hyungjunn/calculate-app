import Calculator from "./calculator";
import { UiController } from "../ui-controller";

const calculator = new Calculator();
const $screen = document.querySelector(".screen");
const uiController = new UiController(calculator, $screen);

uiController.init();
