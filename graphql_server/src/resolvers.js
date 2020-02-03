import pubsub from "./pubsub";

const books = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    id: 2,
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const chats = [
  {
    id: 1,
    message: "Hello",
    author: "Guillermo del Toro"
  },
  {
    id: 2,
    message: "World",
    author: "Neill Blomkamp"
  }
];
const CHAT_CHANNEL = "CHAT_CHANNEL";

export const resolvers = {
  Query: {
    books: (_, { input }, context, info) => {
      return books;
    },
    book: (_, { id }) => {
      return books.find(book => book.id === id);
    },
    authors: () => {
      return [
        { name: "Todd", twitter: "toddmotto" },
        { name: "React", twitter: "reactjs" }
      ];
    },
    chats: () => chats
  },

  Mutation: {
    addAuthor: (_, { input: { name, twitter } }) => {
      return {
        name,
        twitter
      };
    },
    deleteBook: (_, { title }) => true,
    changeBookTitle: async (_, { input }) => {
      let { id, title } = input;
      let book = books.find(book => book.id === id);
      pubsub.publish("bookTitleChanged", {
        bookTitleChanged: { ...book, title }
      });
      return {
        ...book,
        title: title + " test"
      };
    },
    sendMessage: async (_, { input: { message, author } } ) => {
      console.log('here')
      const chat = { id: chats.length + 1, message: message, author: author };
      chats.push(chat);
      pubsub.publish("CHAT_CHANNEL", { messageSent: chat });
      return chat;
    }
  },

  Subscription: {
    bookTitleChanged: {
      subscribe: () => pubsub.asyncIterator(["bookTitleChanged"])
    },

    messageSent: {
      subscribe: () => pubsub.asyncIterator(CHAT_CHANNEL)
    }
  }
};
