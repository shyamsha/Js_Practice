type User2 = {
  id: number;
  name: string;
};
type Admin1 = {
  role: string;
};
type superAdmin1 = {
  permissions: string[];
};
type UserWithAdmin = User & Admin; // intersection type
type UserWithSuperAdmin = User & Admin & superAdmin1; // intersection type with multiple types

interface UserWithRoles extends User, Admin, superAdmin1 {}

type DataSource = {
  [key: string]: number | string | boolean; // index signature
};

let store: DataSource = {};

store.userId = 1;
store.userName = "John Doe";
store.isAdmin = true;
store.age = 30;

let product = ["Apple", "Banana", "Cherry"] as const; // readonly tuple
// product[0] = "Mango"; // Error: Cannot assign to '0' because it is a read-only property
// product.push("Durian"); // Error: Property 'push' does not exist on type 'readonly ["Apple", "Banana", "Cherry"]'.

const bestSellingProduct: Record<"name" | "price", string | number> = {
  // use specific types and key typescript will enforce other keys as well if not provided keys
  name: "Banana",
  price: 1.0,
};

const bestSellingProduct1 = {
  // use specific types we can use satisfies keyword
  price: 1.0,
  role: "0",
} satisfies Record<string, number | string>;
