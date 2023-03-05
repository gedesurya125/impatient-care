import React from "react";

// External Components
import { Box, Paragraph } from "@gedesurya125/surya-ui";

export const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        gridColumn: [null, "1/ span 2 "],
        bg: "green",
        px: [null, "small"],
      }}
    >
      <Paragraph
        sx={{
          fontFamily: "body.normal",
          lineHeight: 2,
          fontSize: [null, "1.3rem"],
        }}
      >
        &copy; by: I Gede Surya Adi Pranata
      </Paragraph>
    </Box>
  );
};
