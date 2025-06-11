// =====================================
// FUNCTION COMPOSITION - COMPLETE GUIDE
// =====================================

console.log("=== 1. BASIC FUNCTION COMPOSITION ===");

// Function composition: (f ∘ g)(x) = f(g(x))
// The output of one function becomes the input of another

// Simple functions
const add5 = (x) => x + 5;
const multiply3 = (x) => x * 3;
const square = (x) => x * x;

// Manual composition
const addThenMultiply = (x) => multiply3(add5(x));
console.log("addThenMultiply(2):", addThenMultiply(2)); // (2+5)*3 = 21

// Reading right to left: multiply3(add5(2))
const multiplyThenSquare = (x) => square(multiply3(x));
console.log("multiplyThenSquare(4):", multiplyThenSquare(4)); // (4*3)² = 144

console.log("\n=== 2. COMPOSE FUNCTION (RIGHT TO LEFT) ===");

// Creating a generic compose function
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Usage examples
const addMultiplySquare = compose(square, multiply3, add5);
console.log("compose(square, multiply3, add5)(2):", addMultiplySquare(2)); // ((2+5)*3)² = 441

// More practical example
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = (str) => str.split("").reverse().join("");
const addExclamation = (str) => str + "!";

const processString = compose(addExclamation, capitalize, reverse);
console.log("processString('hello'):", processString("hello")); // "Olleh!"

console.log("\n=== 3. PIPE FUNCTION (LEFT TO RIGHT) ===");

// Pipe reads left to right (more intuitive for many)
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

// Same functions, different order
const processStringPipe = pipe(reverse, capitalize, addExclamation);
console.log(
  "pipe(reverse, capitalize, addExclamation)('hello'):",
  processStringPipe("hello")
); // "Olleh!"

// Mathematical example
const calculate = pipe(
  (x) => x + 10, // Add 10
  (x) => x * 2, // Multiply by 2
  (x) => x - 5, // Subtract 5
  (x) => x / 3 // Divide by 3
);
console.log("calculate(5):", calculate(5)); // ((5+10)*2-5)/3 = 8.33...

console.log("\n=== 4. CURRYING WITH COMPOSITION ===");

// Curried functions work great with composition
const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;
const subtract = (a) => (b) => b - a; // Note: b - a for proper composition

const add10 = add(10);
const multiply2 = multiply(2);
const subtract5 = subtract(5);

const complexCalc = pipe(add10, multiply2, subtract5);
console.log("complexCalc(3):", complexCalc(3)); // ((3+10)*2)-5 = 21

// Partial application with composition
const words = ["javascript", "composition", "functional", "programming"];

const processWords = pipe(
  (arr) => arr.map((word) => word.toUpperCase()),
  (arr) => arr.filter((word) => word.length > 8),
  (arr) => arr.sort(),
  (arr) => arr.join(" - ")
);

console.log("processWords(words):", processWords(words));

console.log("\n=== 5. ASYNC FUNCTION COMPOSITION ===");

// Composing async functions
const delay = (ms) => (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const asyncAdd = (n) => async (value) => {
  await delay(100)(null);
  return value + n;
};

const asyncMultiply = (n) => async (value) => {
  await delay(100)(null);
  return value * n;
};

// Async pipe function
const asyncPipe =
  (...fns) =>
  async (value) => {
    let result = value;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };

// Usage
const asyncCalculation = asyncPipe(asyncAdd(5), asyncMultiply(3), asyncAdd(10));

// Note: This will return a Promise
asyncCalculation(2).then((result) => {
  console.log("Async calculation result:", result); // ((2+5)*3)+10 = 31
});

console.log("\n=== 6. REAL-WORLD DATA PROCESSING ===");

// Simulated data
const users = [
  { id: 1, name: "john doe", age: 25, active: true, score: 85 },
  { id: 2, name: "jane smith", age: 30, active: false, score: 92 },
  { id: 3, name: "bob wilson", age: 35, active: true, score: 78 },
  { id: 4, name: "alice brown", age: 28, active: true, score: 96 },
];

// Individual transformation functions
const filterActive = (users) => users.filter((user) => user.active);
const sortByScore = (users) => [...users].sort((a, b) => b.score - a.score);
const formatNames = (users) =>
  users.map((user) => ({
    ...user,
    name: user.name.split(" ").map(capitalize).join(" "),
  }));
const addRank = (users) =>
  users.map((user, index) => ({
    ...user,
    rank: index + 1,
  }));
const selectFields = (fields) => (users) =>
  users.map((user) =>
    fields.reduce((obj, field) => ({ ...obj, [field]: user[field] }), {})
  );

// Compose the data processing pipeline
const processUsers = pipe(
  filterActive,
  sortByScore,
  formatNames,
  addRank,
  selectFields(["rank", "name", "score"])
);

console.log("Processed users:", JSON.stringify(processUsers(users), null, 2));

console.log("\n=== 7. VALIDATION PIPELINE ===");

// Validation functions that return { valid: boolean, errors: string[] }
const required = (fieldName) => (value) => ({
  valid: value != null && value !== "",
  errors: value == null || value === "" ? [`${fieldName} is required`] : [],
});

const minLength = (min, fieldName) => (value) => ({
  valid: !value || value.length >= min,
  errors:
    value && value.length < min
      ? [`${fieldName} must be at least ${min} characters`]
      : [],
});

const email = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    valid: !value || emailRegex.test(value),
    errors: value && !emailRegex.test(value) ? ["Invalid email format"] : [],
  };
};

// Compose validations
const composeValidations =
  (...validators) =>
  (value) => {
    const results = validators.map((validator) => validator(value));
    return {
      valid: results.every((result) => result.valid),
      errors: results.flatMap((result) => result.errors),
    };
  };

const validateEmail = composeValidations(required("Email"), email);

const validatePassword = composeValidations(
  required("Password"),
  minLength(8, "Password")
);

console.log("Email validation (empty):", validateEmail(""));
console.log("Email validation (valid):", validateEmail("test@example.com"));
console.log("Password validation (short):", validatePassword("123"));

console.log("\n=== 8. FUNCTION COMPOSITION UTILITIES ===");

// Advanced composition utilities
const identity = (x) => x;
const constant = (x) => () => x;
const tap = (fn) => (value) => {
  fn(value);
  return value;
}; // For side effects

// Conditional composition
const when = (predicate, fn) => (value) => predicate(value) ? fn(value) : value;
const unless = (predicate, fn) => (value) =>
  !predicate(value) ? fn(value) : value;

// Example usage
const isEven = (n) => n % 2 === 0;
const double = (n) => n * 2;
const log = (value) => console.log("Debug:", value);

const processNumber = pipe(
  tap(log), // Log original value
  when(isEven, double), // Double if even
  unless((n) => n > 100, add(50)) // Add 50 unless > 100
);

console.log("processNumber(4):", processNumber(4)); // 4 -> 8 (doubled)
console.log("processNumber(5):", processNumber(5)); // 5 -> 55 (added 50)

console.log("\n=== 9. MEMOIZATION WITH COMPOSITION ===");

// Memoization wrapper
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Cache hit for:", key);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Expensive operations
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

const expensiveCalculation = pipe(
  memoize((x) => {
    console.log("Calculating...");
    return x * x;
  }),
  memoize((x) => {
    console.log("Adding 10...");
    return x + 10;
  }),
  memoize((x) => {
    console.log("Multiplying by 2...");
    return x * 2;
  })
);

console.log("First call:", expensiveCalculation(5));
console.log("Second call (cached):", expensiveCalculation(5));

console.log("\n=== 10. ERROR HANDLING IN COMPOSITION ===");

// Maybe monad-like error handling
const safe = (fn) => (value) => {
  try {
    const result = fn(value);
    return { success: true, value: result, error: null };
  } catch (error) {
    return { success: false, value: null, error: error.message };
  }
};

const safeChain = (fn) => (result) => {
  if (!result.success) return result;
  return safe(fn)(result.value);
};

// Safe operations
const safeDivide = (divisor) => (n) => {
  if (divisor === 0) throw new Error("Division by zero");
  return n / divisor;
};

const safeParseInt = (str) => {
  const result = parseInt(str);
  if (isNaN(result)) throw new Error("Not a valid number");
  return result;
};

// Compose safe operations
const safeCalculation = pipe(
  safe(safeParseInt),
  safeChain(multiply(2)),
  safeChain(safeDivide(3)),
  safeChain(add(10))
);

console.log("Safe calculation ('15'):", safeCalculation("15"));
console.log("Safe calculation ('abc'):", safeCalculation("abc"));

console.log("\n=== 11. PERFORMANCE COMPARISON ===");

// Performance test
const testData = Array.from({ length: 10000 }, (_, i) => i);

// Imperative approach
console.time("Imperative");
const imperativeResult = [];
for (let i = 0; i < testData.length; i++) {
  let value = testData[i];
  value = value + 5;
  value = value * 3;
  if (value % 2 === 0) {
    imperativeResult.push(value);
  }
}
console.timeEnd("Imperative");

// Functional composition approach
console.time("Functional");
const functionalResult = pipe(
  (arr) => arr.map(add5),
  (arr) => arr.map(multiply3),
  (arr) => arr.filter(isEven)
)(testData);
console.timeEnd("Functional");

console.log(
  "Results equal:",
  imperativeResult.length === functionalResult.length
);

console.log("\n=== SUMMARY ===");
console.log(`
// Function Composition Benefits:
// 1. Code Reusability - Small functions can be combined in different ways
// 2. Readability - Clear data flow and transformations
// 3. Testability - Each function can be tested in isolation
// 4. Modularity - Easy to add, remove, or modify steps
// 5. Declarative Style - Focus on what, not how

// Best Practices:
// 1. Keep functions pure (no side effects)
// 2. Use meaningful function names
// 3. Prefer pipe for left-to-right reading
// 4. Handle errors gracefully
// 5. Consider performance for large datasets
// 6. Use currying for reusable partial functions
// `);
