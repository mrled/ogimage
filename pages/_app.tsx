import React from "react";
import { AppProps } from "next/app";

import "styles/tailwind.css";
import "styles/fonts.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
