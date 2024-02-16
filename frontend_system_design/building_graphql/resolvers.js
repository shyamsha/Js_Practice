const data = {
  authors: [
    {
      id: "1",
      name: "sHyaM",
      bookIds: ["101", "102", "103"],
    },
    {
      id: "2",
      name: "goal",
      bookIds: ["104"],
    },
  ],
  books: [
    {
      id: "103",
      title: "Glass",
      publishedYear: 2024,
      authorId: "1",
    },
    {
      id: "101",
      title: "The Awakening",
      publishedYear: 2023,
      authorId: "2",
    },
    {
      id: "102",
      title: "City of Glass",
      publishedYear: 2024,
      authorId: "1",
    },
    {
      id: "104",
      title: "Awakening",
      publishedYear: 2023,
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, arg, context, info) => {
      return data.authors.find((ele) => ele.id === parent.authorId);
    },
  },
  Author: {
    books: (parent, arg, context, info) => {
      return data.books.filter((ele) => parent.bookIds.includes(ele.id));
    },
  },
  Query: {
    authors: (parent, arg, context, info) => {
      return data.authors;
    },
    books: (parent, arg, context, info) => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, arg, context, info) => {
      const newBook = { ...arg, id: 105 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
