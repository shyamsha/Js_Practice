export const data = [
  {
    id: 1,
    name: "Fruits",
    children: [
      { id: 1.1, name: "Apple" },
      { id: 1.2, name: "Banana" },
      {
        id: 1.3,
        name: "Mango",
        children: [
          { id: 1.4, name: "Green Mango" },
          { id: 1.5, name: "Bagnepalle Mango" },
        ],
      },
      {
        id: 1.6,
        name: "Grapes",
        children: [
          { id: 1.7, name: "Black Grapes" },
          { id: 1.8, name: "Red Grapes" },
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
