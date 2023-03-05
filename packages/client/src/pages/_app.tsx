// styles
import "../styles/globals.css";

// external components
import { ApolloProvider } from "@apollo/client";

// local components
import client from "apollo/client";

// fonts
import "../styles/fonts/Qucksand.css";

import type { AppProps } from "next/app";

import { ThemeProvider } from "@gedesurya125/surya-ui";

import theme from "theme";
import { config } from "theme/config";

// Layouts
import { MainLayout } from "layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme} config={config}>
        <MainLayout Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
