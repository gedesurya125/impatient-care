import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";

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
          <NavigationLink to={data.to} key={index}>
            {data.label}
          </NavigationLink>
        );
      })}
    </Box>
  );
};

const NavigationLink = ({ to, children, sx }: PageLinkProps) => {
  return (
    <PageLink
      to={to}
      sx={{
        fontFamily: "body.bold",
        textDecoration: "none",
        color: "text",
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
