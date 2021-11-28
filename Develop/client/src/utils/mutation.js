import { gql } from '@apollo/client';

export const CREATE_USER =gql`
    mutation createUser($username: String!, $email:String!, $password: String!){
    createUser(username: $username, email: $email, password: $password){
      token
      user{
        email
        username
      }
    }
  }`;

  export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
    loginUser(email:$email, password:$password) {
      token
      user{
        username
      }
    }
    
  }`;

  export const SAVE_BOOK =gql`
    mutation saveBook($BookInput: BookInput!) {
    saveBook(BookInput:$BookInput) {
      username
      savedBooks{
        bookId
        title
        description
      }
    }
    
  }`;

  export const DELETE_BOOK =gql`
  mutation deleteBook ($bookId:String!){
    deleteBook(bookId: $bookId){
      username 
    }
  }`;