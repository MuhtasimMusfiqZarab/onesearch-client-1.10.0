import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://161.97.97.183:5000/graphql',
  cache: new InMemoryCache(),
});
