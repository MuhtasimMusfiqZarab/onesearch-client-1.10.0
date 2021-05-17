import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // uri: 'http://161.97.97.183:5000/graphql',
  uri: 'https://onesearchio.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
