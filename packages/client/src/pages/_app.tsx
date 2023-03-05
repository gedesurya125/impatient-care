import "src/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@gedesurya125/surya-ui";

import theme from "src/theme";
import { config } from "src/theme/config";

// Layouts
import { MainLayout } from "src/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} config={config}>
      <MainLayout Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}
