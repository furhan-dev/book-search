const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
  }

  type Auth {
    token: ID
    user: User
  }

  input BookInput {
    bookId: ID!
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
    user(userId: ID, username: String): User
    users: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    deleteBook(book: BookInput!): User
  }
`;

module.exports = typeDefs;
