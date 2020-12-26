import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

//custom global
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
