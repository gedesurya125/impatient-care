import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";
import { useRouter } from "next/router";

// Local Components
import { PageLink } from "./PageLink";

// Types
import { PageLinkProps } from "./PageLink";

// Data
import { navigationBarData } from "data";

export const NavigationBar = () => {
  return (
    <Box
      as="nav"
      sx={{
        gridColumn: ["null", "1/ span 2"],
        display: "flex",
        px: "small",
        border: ({ colors }) => `solid ${colors?.primary}`,
        borderWidth: "2px 0",
      }}
    >
      {navigationBarData.map((data, index) => {
        return (
          <NavigationLinkItem to={data.to} key={index}>
            {data.label}
          </NavigationLinkItem>
        );
      })}
    </Box>
  );
};

const NavigationLinkItem = ({ to, children, sx }: PageLinkProps) => {
  const router = useRouter();
  const removeSlash = (path: string) => path.replace(/\//g, "");

  const isActive = removeSlash(router.pathname) === removeSlash(to);

  console.log("this is the pathname and the to", router.pathname, to);

  return (
    <PageLink
      to={to}
      sx={{
        fontFamily: "body.bold",
        textDecoration: "none",
        color: isActive ? "secondary" : "text",
        lineHeight: 2,
        fontSize: [null, "1.5rem"],
        ":hover": {
          color: "secondary",
        },
        "~ .__navigation-link": {
          ml: "2rem",
        },
        ...sx,
      }}
      className="__navigation-link"
    >
      {children}
    </PageLink>
  );
};
