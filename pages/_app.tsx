import { AppProps } from "next/app";
import "../styles/main.css";

import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
