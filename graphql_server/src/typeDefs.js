import { gql } from "apollo-server";

export const typeDefs = gql`
  input AddAuthorInput {
    name: String!
    twitter: String
  }

  type Author {
    name: String!
    twitter: String
  }

  type Book {
    id: Int!
    title: String!
    author: String!
  }

  input ChangeBookInput {
    id: Int!
    title: String!
  }

  type Chat {
    id: Int!
    message: String!
    author: String!
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
