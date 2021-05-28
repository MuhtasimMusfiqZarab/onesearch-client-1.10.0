import 'bootstrap/dist/css/bootstrap.min.css';
//global css
import '../styles/globals.css';
//custom global
import '../styles/main.scss';

import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
