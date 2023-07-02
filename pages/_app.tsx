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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          itemProp="keywords"
          content="PyCon India, PyConIndia, PyConIndia2023, Python, India, PyCon, Conference, Hyderabad, 2023, PyConIn"
        />
        <meta
          name="description"
          itemProp="description"
          content="The premier conference in India on using and developing the python programming language"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/2023/images/favicon.ico" />
        <title>PyCon India 2023, Hyderabad</title>
      </Head> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
