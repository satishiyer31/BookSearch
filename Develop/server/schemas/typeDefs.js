const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }
  type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [String]
  }
  
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    savedbooks(username: String): [User]
    getMe: User
  }
  input BookInput{
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [String]
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(BookInput: BookInput!): User
    deleteBook(bookId: String!): User
  }
`;
module.exports = typeDefs;
