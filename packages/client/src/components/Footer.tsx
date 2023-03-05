import React from "react";

// External Components
import { Box } from "@gedesurya125/surya-ui";

export const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        gridColumn: [null, "1/ span 2 "],
        bg: "green",
      }}
    >
      &copy; by: I Gede Surya Adi Pranata
    </Box>
  );
};
