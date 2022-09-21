import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($book: BookInput!) {
  saveBook(book: $book) {
    _id
    username
    email 
    savedBooks {
      bookId
      title
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation deleteBook($book: BookInput!) {
  deleteBook(book: $book) {
    _id
    username
    email 
    savedBooks {
      bookId
      title
    }
  }
}
`;