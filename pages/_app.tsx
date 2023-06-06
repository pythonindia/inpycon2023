import { AppProps } from "next/app";
import "../styles/css/bootstrap.min.css";
import "../styles/css/font-awesome-min.css";
import "../styles/css/owl.carousel.css";
import "../styles/css/owl.theme.default.min.css";
import "../styles/css/style.css";
import "../styles/css/aos.css";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <title>PyCon India 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
