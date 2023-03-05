// External Components
import { GridTemplate, Heading } from "@gedesurya125/surya-ui";

// Local Components

export default function Home() {
  return (
    <>
      <Headline />
    </>
  );
}

const Headline = () => (
  <Heading
    as="h2"
    sx={{
      fontSize: ["2rem", "3rem"],
      bg: "blue",
    }}
  >
    I Gede Surya Adi Pranata
  </Heading>
);
