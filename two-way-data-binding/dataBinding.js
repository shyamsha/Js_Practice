export class DataBinding {
  constructor({ output, input }) {
    this.output = output;
    this.input = input;
    this.setInputListener();
  }
  getValue() {
    return this.output.textContent;
  }
  updateOutput(value) {
    this.output.textContent = value;
  }
  updateInput(value) {
    this.input.value = value;
  }
  updateValue(value) {
    this.updateInput(value);
    this.updateOutput(value);
  }

  setInputListener() {
    this.input.addEventListener("keyup", () => {
      this.updateOutput(this.input.value);
    });
  }
}
