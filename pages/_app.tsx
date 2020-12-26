import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

//custom global
import '../styles/main.scss';

import { Provider } from 'react-redux';
import { useStore } from '../store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
