import type { Theme } from 'theme-ui';

import { colors } from './colors';
import { buttons } from './buttons';

const theme: Theme = {
  fonts: {
    body: {
      normal: 'Quicksand-Regular, sans-serif',
      medium: 'Quicksand-Medium, sans-serif',
      bold: 'Quicksand-SemiBold, sans-serif',
    },
  },
  text: {},
  forms: {
    label: {
      fontFamily: 'body.medium',
      fontSize: ['1.5rem', '1.5rem'],
      lineHeight: 1,
    },
    input: {
      fontFamily: 'body.normal',
      fontSize: ['1.5rem', '1.5rem'],
      lineHeight: 1.4,
      px: ['0.6rem', '0.6rem'],
    },
    select: {
      variant: 'forms.input',
    },
  },
  buttons,
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
