import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ApolloClient from "./ApoloClient";

const GET_BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`;

export function Book() {
  const { loading, error, data } = useQuery(GET_BOOKS, {
    client: ApolloClient
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error ...</p>;

  const books = [];
  for (var i in data.books) {
    books.push(
      <li key={i}>
        <div>"{data.books[i].title}"</div>
        <div>{data.books[i].author}</div>
      </li>
    );
  }
  return (
    <span>
      <h1>Books</h1>
      <ul>{books}</ul>
    </span>
  );
}
