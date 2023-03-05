import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";

export const Header = () => {
  return (
    <Box
      sx={{
        gridColumn: [null, "1/ span 2"],
        bg: "yellow",
      }}
    >
      Welcome to impatient-care application
    </Box>
  );
};
