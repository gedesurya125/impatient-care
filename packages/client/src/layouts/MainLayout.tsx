import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";

// Local Components
interface MainLayoutProps {
  Component: any;
  pageProps: any;
}

export const MainLayout = ({ Component, pageProps }: MainLayoutProps) => {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page);

  return (
    <>
      Header
      {getLayout(<Component {...pageProps} />)}
      Footer
    </>
  );
};
