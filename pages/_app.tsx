// import 'bootstrap/dist/css/bootstrap.min.css';

//custom global
import Script from "next/script";
import "styles/main.scss";

import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Script
        id="ga-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-4J4WYW0YZ5"
      />
      <Script
        id="ga-script-unknown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4J4WYW0YZ5');
          `,
        }}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
