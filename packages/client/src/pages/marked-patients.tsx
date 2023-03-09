// External Components
import { GridTemplate, Heading, Box } from '@gedesurya125/surya-ui';

// Local Components

export default function MarkedPatients() {
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
      fontSize: ['2rem', '3rem'],
      fontFamily: 'body.bold',
    }}
  >
    Welcome to Marked Patient
  </Heading>
);
