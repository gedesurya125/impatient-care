// External Components
import { GridTemplate, Heading, Box } from "@gedesurya125/surya-ui";

// Local Components

export default function MarkedPatients() {
  return (
    <Box
      as="main"
      id="home-page"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Headline />
    </Box>
  );
}

const Headline = () => (
  <Heading
    as="h2"
    sx={{
      fontSize: ["2rem", "3rem"],
      fontFamily: "body.bold",
    }}
  >
    Welcome to Marked Patient
  </Heading>
);
