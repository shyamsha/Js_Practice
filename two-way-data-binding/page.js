import { DataBinding } from "./dataBinding.js";
const outputElement = document.getElementById("bind-output");
const inputElement = document.getElementById("bind-input");

const binding = new DataBinding({ output: outputElement, input: inputElement });
binding.updateValue("Initial Value");
// binding.updateOutput("test");

// let i = 1;
// setInterval(() => {
//   binding.updateOutput(i++);
// }, 1000);
