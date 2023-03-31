import { AppProps } from "next/app";
import "../styles/main.css";

import dynamic from "next/dynamic";

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons';

// library.add(faTriangleCircleSquare);

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
