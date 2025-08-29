let x = 5;
// x="5" error will throw because TypeScript is strongly typed and does not allow implicit type conversion.
let users: (string | number)[] = ["John", "Jane", 1]; //this is a union type array
let persons: Array<string | number> = ["Jane", 25]; //this is way representing using generics

let results: [number, number] = [1, -1]; //this is a tuple type with fixed length and types
let user: { name: string; age: number } = { name: "John", age: 30 }; //this is an object type
let admin: Array<{ name: string; role: string }> = [
  { name: "Alice", role: "Admin" },
];
let role: {} = "qwerty"; // this is an empty object type and can accept any value and null & undefined values not allowed
let data: Record<string, number | string | boolean> = {
  // Record indicating object with string keys and values getting union types
  id: 1,
  name: "John",
  age: 30,
  isAdmin: true,
};

enum Role {
  Admin = "Admin", // 0
  User = "User", // 1
  Guest = "Guest", // 2 default numbers assigned pre defined values
}
let currentUserRole: Role = Role.Admin; // this is an enum type and can only be one of the defined values
let userRoles: Role[] = [Role.User, Role.Guest]; // this is an array of enum values
let userRole: "admin" = "admin"; // this is a single enum value we can set though literal type like this way

let result: [1 | -1, 1 | -1] = [1, -1]; // using literal types to define specific values

function processResult(res: [1 | -1, 1 | -1]): // return type we mentioned
Array<string> {
  return res.map((r) => (r === 1 ? "Success" : "Failure"));
}

function log(mes: string): void {
  // we can also define return type of function if return is nothing
  console.log(mes);
}

function add(a: number, b: number): never {
  throw new Error(
    "This function does not return a value instead of throwing error"
  );
}

// any vs unknown
// any is a type that allows any value to be assigned to it
let value: any = 5;
value = "Hello";
value = true;
value(); // This will work because value is of type 'any'

// unknown is a type that represents any value but is safer than any
let unknownValue: unknown = 5;
unknownValue = "Hello";
unknownValue = true;
// unknownValue(); // This will not work because unknown is not callable

// nullish coalescing
let nullishValue: string | null | undefined | boolean = false;
let res = nullishValue ?? "Default Value";
// If nullishValue is check right side value null or undefined, use "Default Value" if right side is false it will use right side value
