export const data = [
  {
    id: 1,
    name: "Fruits",
    children: [
      { id: 1.1, name: "Apple" },
      { id: 2.1, name: "Banana" },
      {
        id: 3.1,
        name: "Mango",
        children: [
          { id: 3.2, name: "Green Mango" },
          { id: 3.3, name: "Bagnepalle Mango" },
        ],
      },
      {
        id: 4.1,
        name: "Grapes",
        children: [
          { id: 4.2, name: "Black Grapes" },
          { id: 4.3, name: "Red Grapes" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Vegetables",
    children: [
      { id: 2.1, name: "Potato" },
      { id: 2.2, name: "Tomato" },
      { id: 2.3, name: "Onion" },
    ],
  },
  { id: 3, name: "Milk" },
  { id: 4, name: "Egg" },
];
