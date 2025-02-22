document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  // Initialize variables to store user input and operations
  let currentInput = "";
  let previousInput = "";
  let operator = "";

  // Add your logic for handling button clicks here
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      // Implement your logic for handling different button actions
    });
  });
});
