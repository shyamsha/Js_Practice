document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  // Initialize variables to store user input and operations
  let currentInput = "";
  let previousInput = "";
  let operator = "";
  const calculate = () => {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    if (isNaN(num1) || isNaN(num2)) return "";
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      default:
        return "";
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      if (!isNaN(value) || value === ".") {
        currentInput += value;
        display.value = currentInput;
        return;
      } else if (value === "C") {
        currentInput = "";
        previousInput = "";
        operator = "";
        display.value = "";
        return;
      } else if (value === "=") {
        if (currentInput !== "" && previousInput !== "" && operator !== "") {
          const result = calculate();
          display.value = result;
          currentInput = result.toString();
          previousInput = "";
          operator = "";
        }
      } else {
        if (currentInput) {
          if (previousInput && operator) {
            const result = calculate();

            previousInput = result.toString();
            display.value = previousInput;
          } else {
            previousInput = currentInput;
          }
          currentInput = "";
          operator = value;
        }
      }
    });
  });
});
