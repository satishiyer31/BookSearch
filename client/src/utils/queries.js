import { gql } from '@apollo/client';

export const QUERY_GETME = gql `
query getMe {
    getMe {
      username
      email
      savedBooks {
        description
        bookId
        image
        link
        title
        authors
      }
    }
    
  }`;