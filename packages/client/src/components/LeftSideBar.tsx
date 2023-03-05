import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";
export const LeftSideBar = () => {
  return (
    <Box
      as="aside"
      sx={{
        width: [null, "20rem"],
        bg: "teal",
      }}
    >
      Hello from side bar
    </Box>
  );
};
