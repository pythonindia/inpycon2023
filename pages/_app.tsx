import { AppProps } from "next/app";
import "../styles/css/bootstrap.min.css";
import "../styles/css/font-awesome-min.css";
import "../styles/css/owl.carousel.css";
import "../styles/css/owl.theme.default.min.css";
import "../styles/css/style.css";
import "../styles/css/aos.css";

import dynamic from "next/dynamic";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

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
