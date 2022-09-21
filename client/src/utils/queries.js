import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    user {
      _id
      username
      email
      savedBooks {
        bookId
        image
        title
        description
        authors
        link
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID, $username: String) {
    user(userId: $userId, username: $username) {
      _id
      username
      email
      savedBooks {
        bookId
        image
        title
        description
        authors
        link
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        image
        title
        description
        authors
        link
      }
    }
  }
`;
