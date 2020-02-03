import pubsub from './pubsub';

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    authors: () => {
      return [
        { name: 'Todd', twitter: 'toddmotto' },
        { name: 'React', twitter: 'reactjs' },
      ];
    },
  },
  Mutation: {
    addAuthor: (_, { input: { name, twitter } }) => {
      return {
        name,
        twitter,
      };
    },
    deleteBook: (_, { title }) => true,
    changeBookTitle: (_, { input }) => {
      let { id, title } = input;

      let book = books.find(book => book.id === id);

      // Publish the book so that the subscription can fire off
      pubsub.publish('bookTitleChanged', {
        bookTitleChanged: { ...book, title },
      });

      //Return the new book title
      return {
        ...book,
        title,
      };
    },
  },
  // Add Subscription at the end of the resolvers object
  Subscription: {
    bookTitleChanged: {
      subscribe: () => pubsub.asyncIterator(['bookTitleChanged']),
    },
  },
};