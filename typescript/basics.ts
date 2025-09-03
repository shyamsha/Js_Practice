let x = 5;
// x="5" error will throw because TypeScript is strongly typed and does not allow implicit type conversion.
let users: (string | number)[] = ["John", "Jane", 1]; //this is a union type array
let persons: Array<string | number> = ["Jane", 25]; //this is way representing using generics

let results: [number, number] = [1, -1]; //this is a tuple type with fixed length and types
let person: { name: string; age: number } = { name: "John", age: 30 }; //this is an object type
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

class SimpleUser {
  name: string;
  age: number;

  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }
}

let basicNewUser = new SimpleUser("John", 30);
class Admin extends SimpleUser {
  constructor(name: string, age: number, public role: string) {
    // public defined as type instead of creating separate properties
    super(name, age); // calling parent class constructor
    console.log(
      `Admin Created: ${this.name}, Age: ${this.age}, Role: ${this.role}`
    );
  }
}
let adminUser = new Admin("Alice", 35, "Admin");
adminUser.role = "SuperAdmin"; // we can access and modify public properties
class SuperAdmin extends Admin {
  constructor(
    name: string,
    age: number,
    role: string,
    private permissions: string[]
  ) {
    super(name, age, role);
    console.log(
      `SuperAdmin Created: ${this.name}, Age: ${this.age}, Role: ${this.role}, Permissions: ${this.permissions}`
    );
  }
  getPermissions() {
    this.permissions.push("DELETE"); // we can access and modify private properties within the class
    return this.permissions;
  }
}

let superAdminUser = new SuperAdmin("Bob", 40, "SuperAdmin", ["READ", "WRITE"]);

// superAdminUser.permissions.push("DELETE"); // we can access and modify public properties but not private properties it is available only within the class

class User1 {
  readonly _name: string;
  readonly _age: number;
  readonly _location: string[];

  constructor(name: string, age: number, location: string[]) {
    this._name = name;
    this._age = age;
    this._location = location;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get location(): string[] {
    return this._location;
  }
}

let user1 = new User1("John", 30, ["New York", "London"]);
user1.name; // we can access name but cannot modify it because it is readonly
user1.location.push("Paris"); // we can access location array and modify its contents but cannot reassign the array itself
