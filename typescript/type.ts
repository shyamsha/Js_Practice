const userName = {
  name: "syam",
  age: 31,
  Permissions: ["read", "write"],
};
type userName1 = typeof userName;

let user1: userName1 = {
  name: "John",
  age: 25,
  Permissions: ["read"],
};

let user2: userName1 = {
  name: "Alice",
  age: 28,
  Permissions: ["write"],
};
// type useful in type checking and ensuring consistency across similar objects

let keys: keyof userName1 = "age"; // keys can be either 'name' or 'age' typescript provides keyof to use keys of an object as a type

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
let userNameValue = getProperty(user1, "name"); // userNameValue is of type string

// index typed object
let userPermissions: userName1["Permissions"];
user1.Permissions.push("execute");
userPermissions = user1.Permissions.map((perm) => perm.toUpperCase());

// mapped types
type Operations = {
  add: (x: number, y: number) => number;
  subtract: (x: number, y: number) => number;
  multiply: (x: number, y: number) => number;
  divide: (x: number, y: number) => number;
};

let mathOperations: Operations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

let mathResults = {
  add: mathOperations.add(5, 3),
  subtract: mathOperations.subtract(5, 3),
  multiply: mathOperations.multiply(5, 3),
  divide: mathOperations.divide(5, 3),
};

type OperationResults<T> = {
  [Key in keyof T]-?: number; // -? makes all properties required not optional
};

// template literal types
type ReadPermission = "read" | "no-read";
type WritePermission = "write" | "no-write";

type AllPermissions = `${ReadPermission}-${WritePermission}`; // union of all combinations of read and write permissions

// inferred types
type InferredReadPermission = AllPermissions extends `${infer R}-${infer W}`
  ? R
  : never;
type InferredWritePermission = AllPermissions extends `${infer R}-${infer W}`
  ? W
  : never;
// infer keyword in TypeScript is used within conditional types to infer a type variable from a type expression. For example:

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// Here, infer R extracts the return type R from a function type T.

// In your code, you used infer to extract parts of a template literal type:

// type InferredReadPermission = AllPermissions extends `${infer R}-${infer W}` ? R : never;
// type InferredWritePermission = AllPermissions extends `${infer R}-${infer W}` ? W : never;

// This means:
// - InferredReadPermission will be "read" | "no-read"
// - InferredWritePermission will be "write" | "no-write"

// You can use infer in other scenarios, such as extracting element types from arrays:

type ElementType<T> = T extends (infer U)[] ? U : never;

type NumberArray = number[];
type NumberElement = ElementType<NumberArray>; // NumberElement is number
