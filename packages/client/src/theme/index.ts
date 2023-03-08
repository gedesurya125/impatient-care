import type { Theme } from 'theme-ui';

import { colors } from './colors';

const theme: Theme = {
  fonts: {
    body: {
      normal: 'Quicksand-Regular, sans-serif',
      medium: 'Quicksand-Medium, sans-serif',
      bold: 'Quicksand-SemiBold, sans-serif',
    },
  },
  colors: {
    ...colors,
  },
  space: {
    xSmall: '0.5rem',
    small: '2rem',
    medium: '4rem',
  },
  radii: {
    medium: '8px',
  },
};

export default theme;
