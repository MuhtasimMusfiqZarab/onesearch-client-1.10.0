import { GET_POSTS } from './types';

// gql for parse the query string into a query document
import { gql } from '@apollo/client';

import { client } from '../../lib/apollo';

export const fetchPosts = () => async (dispatch) => {
  const response = await client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  });
  console.log(response);
  dispatch({ type: GET_POSTS, payload: response.data.rates });
};
