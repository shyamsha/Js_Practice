function sortUsers(arr) {
  const data = arr.sort((a, b) => a - b);
  return data;
}

const users = [
  {
    name: "ass",
    age: 23,
  },
  { name: "a", age: 34 },
];

console.log(sortUsers(users));
