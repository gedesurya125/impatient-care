import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";

// Local Components

import {
  Footer,
  Header,
  LeftSideBar,
  NavigationBar,
  RightSideBar,
} from "components";
interface MainLayoutProps {
  Component: any;
  pageProps: any;
}

export const MainLayout = ({ Component, pageProps }: MainLayoutProps) => {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page);

  return (
    <Box
      id="main-layout"
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: [null, "auto 1fr"],
        gridTemplateRows: [null, "auto auto 1fr auto"],
      }}
    >
      <Header />
      <NavigationBar />
      <LeftSideBar />
      {getLayout(<Component {...pageProps} />)}
      <Footer />
    </Box>
  );
};
