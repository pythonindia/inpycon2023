import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Script from "next/script";
import { initializeGA, trackPageView } from "../utils/google-analytics";
import "../styles/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalURL = `https://in.pycon/org/2023${router.asPath}`;

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Only animate elements once
    });

    initializeGA();
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        <meta
          name="google-site-verification"
          content="RqR6U8x5VU0hgv44NF8TcklATGcn-k8MHu2jKFU_Ys8"
        />
        <title>PyCon India 2023, Hyderabad | ${router.asPath}</title>
      </Head>
      {/* Default page SEO starts */}
      <DefaultSeo {...SEO} canonical={canonicalURL} />
      {/* Default page SEO ends */}
      <Script
        src="https://cdn.userway.org/widget.js"
        data-account="T8lCiGpEJy"
        async
        defer
      ></Script>
      <Script src="https://www.googletagmanager.com/gtag/js" async></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
