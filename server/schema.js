const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutations {
    addBook(
      title: String!
      genre: String
      author_id: Int!
    ): BooksMutationResponse
    addAuthor(name: String!, age: Int): Book
  }

  type BooksMutationResponse implements MutationResponses {
    code: String!
    success: Boolean!
    message: String!
    user: Book
  }

  interface MutationResponses {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = typeDefs ;
