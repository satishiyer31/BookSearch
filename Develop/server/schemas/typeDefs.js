const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedbooks: [Book]!
  }

  type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link:String
    title: String
    Authors: [Author]
  }

  type Author {
    _id: ID
    type: String
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    savedbooks(username: String): [Book]
    getMe: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(bookId: String!): Book
    deleteBook(bookId: String!): Book
    
  }
`;

module.exports = typeDefs;
