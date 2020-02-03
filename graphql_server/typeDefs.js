const { gql } = require("apollo-server");

export default typeDefs = gql`
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

type Query {
  books: [Book]
  book(id: Int!): Book
  authors: [Author]
}

type Mutation {
  changeBookTitle(input: ChangeBookInput!): Book
  addAuthor(input: AddAuthorInput!): Author
  deleteBook(author: String!): Boolean
}

type Subscription {
  bookTitleChanged: Book
}
`;