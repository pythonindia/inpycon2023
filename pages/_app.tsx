import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import "../styles/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalURL = `https://in.pycon/org/2023${router.pathname}`;
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
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/2023/images/icons/favicon.ico" />
        <title>PyCon India 2023, Hyderabad</title>
        {/* userway import */}
        <script src="https://cdn.userway.org/widget.js" data-account="T8lCiGpEJy" async defer></script>
      </Head>

      {/* Default page SEO starts */}
      <DefaultSeo {...SEO} canonical={canonicalURL} />
      {/* Default page SEO ends */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
