import React from "react";

// External Components
import { Box, Paragraph } from "@gedesurya125/surya-ui";

export const Header = () => {
  return (
    <Box
      sx={{
        gridColumn: [null, "1/ span 2"],
        bg: "secondary",
        px: [null, "small"],
      }}
    >
      <Paragraph
        sx={{
          fontFamily: "body.medium",
          lineHeight: 1.5,
          fontSize: [null, "1.3rem"],
          textAlign: "center",
        }}
      >
        Welcome to impatient-care application
      </Paragraph>
    </Box>
  );
};
