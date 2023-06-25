import { AppProps } from "next/app";
import "../styles/css/style.css";
import {useEffect} from "react";
import AOS from "aos";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Only animate elements once
    });
  }, []);
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
