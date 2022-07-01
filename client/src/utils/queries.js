import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
