import { gql } from "apollo-server";

export const typeDefs = gql`
  type Author {
    name: String!
    twitter: String
  }

  type Book {
    id: Int!
    title: String!
    author: String!
  }

  type Chat {
    id: Int!
    message: String!
    author: String!
  }

  input AddAuthorInput {
    name: String!
    twitter: String
  }

  input ChangeBookInput {
    id: Int!
    title: String!
  }

  input SendMessageInput {
    message: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
    authors: [Author]
    chats: [Chat]
    chat(id: Int!): Chat
  }

  type Mutation {
    changeBookTitle(input: ChangeBookInput!): Book
    addAuthor(input: AddAuthorInput!): Author
    deleteBook(author: String!): Boolean
    sendMessage(input: SendMessageInput!): Chat
    deleteMessage(author: String!): Boolean
  }

  type Subscription {
    bookTitleChanged: Book
    messageSent: Chat
  }
`;
