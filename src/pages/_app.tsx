// styles
import '../styles/globals.css';

// external components
import { ApolloProvider } from '@apollo/client';

// local components
import client, { removeBranchAndScopeText } from 'apollo/client';

// fonts
import '../styles/fonts/Qucksand.css';

import type { AppProps } from 'next/app';

import { ThemeProvider } from '@gedesurya125/surya-ui';

import theme from 'theme';
import { config } from 'theme/config';

// Layouts
import { MainLayout } from 'layouts';

export default function App({ Component, pageProps }: AppProps) {
  const serverUrl = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
    ? `https://${removeBranchAndScopeText(
        process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
      )}/api/graphql`
    : process.env.NEXT_PUBLIC_SERVER_URL;

  console.log('this is the serverUrl', serverUrl);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme} config={config}>
        <MainLayout Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
