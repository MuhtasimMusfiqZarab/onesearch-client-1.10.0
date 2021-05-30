import 'bootstrap/dist/css/bootstrap.min.css';

//custom global
import 'styles/main.scss';

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
