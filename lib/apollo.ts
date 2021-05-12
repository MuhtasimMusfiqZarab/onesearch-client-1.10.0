import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log('This is the endpoint', process.env.NEXT_PUBLIC_API_SERVER);
console.log('This is the secret', process.env.secret);

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_SERVER,
  cache: new InMemoryCache(),
});
