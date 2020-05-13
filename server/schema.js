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
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  union Result = Book | Author

  type Mutation {
    addBook(title: String!, genre: String, author_id: Int!): GenMutationResponse
    addAuthor(name: String!, age: Int): GenMutationResponse
  }

  type GenMutationResponse implements MutationResponses {
    code: String!
    success: Boolean!
    message: String!
    result: Result
  }

  interface MutationResponses {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = typeDefs;
