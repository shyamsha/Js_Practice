// Using this formula celsius = (fahrenheit - 32) / 1.8

function fahrenheitToCelsius(val) {
  return ((val - 32) / 1.8).toFixed(2);
}

console.log(fahrenheitToCelsius(96)); //35.55555555555556

// Celsius to Fahrenheit  = celsius * 1.8 + 32.

function celsiusToFahrenheit(val) {
  return (val * 1.8 + 32).toFixed(0);
}

console.log(celsiusToFahrenheit(35.56)); //96
