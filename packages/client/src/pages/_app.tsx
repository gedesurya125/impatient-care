// styles
import "../styles/globals.css";

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
    <ThemeProvider theme={theme} config={config}>
      <MainLayout Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}
