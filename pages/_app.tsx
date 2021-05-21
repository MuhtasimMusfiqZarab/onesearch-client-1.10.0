import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

//custom global
import '../styles/main.scss';

import { Provider } from 'react-redux';
import store from '../store/store';

//this is react wrapper
import { ApolloProvider } from '@apollo/client';

//import the gql client
import { client } from '../lib/apollo';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
