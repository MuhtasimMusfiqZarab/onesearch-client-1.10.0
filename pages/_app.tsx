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

//google analytics
import * as ga from '../lib/ga';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  //this user effect for analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
