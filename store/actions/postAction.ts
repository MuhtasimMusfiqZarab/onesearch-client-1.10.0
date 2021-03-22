import { GET_CHANNELS } from './types';
import { gql } from '@apollo/client';

import { client } from '../../lib/apollo';

export const fetchPosts = () => async (dispatch) => {
  const response = await client.query({
    query: gql`
      query channels {
        channels {
          id
          channel_name
          channel_url
          description
          socialblade_category
          subscribers
          bio_email
          location
        }
      }
    `,
  });
  console.log(response);
  dispatch({ type: GET_CHANNELS, payload: response.data.channels });
};
