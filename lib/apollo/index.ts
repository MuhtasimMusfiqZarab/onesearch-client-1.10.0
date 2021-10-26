import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_SERVER}/graphql`
});

const authLink = setContext(() => {
  let tokenParam = window.location.href.split('JWT=')[1];
  if (tokenParam) {
    localStorage.setItem('jwtToken', tokenParam);
    window.location.href = '/';
  }

  const token = localStorage.getItem('jwtToken');

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
