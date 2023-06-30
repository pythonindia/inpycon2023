import { AppProps } from "next/app";
import "../styles/css/style.css";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <link rel="icon" href="images/favicon.ico" sizes="any" />
        <title>PyCon India 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
