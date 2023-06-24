import { exportTheme } from './helper';

const buttonBase = {
  cursor: 'pointer',
  width: 'min-content',
  whiteSpace: 'nowrap',
};

const defaultButton = {
  ...buttonBase,
  fontFamily: 'body.bold',
  lineHeight: 1,
  p: '1rem 2rem',
  '&:disabled, &[disabled]': {
    bg: 'muted',
  },
};

const main = {
  primary: {
    ...defaultButton,
    fontSize: '2rem',
  },
  secondary: {
    ...defaultButton,
    fontSize: '1.5rem',
  },
  clear: {
    ...buttonBase,
    p: 0,
    bg: 'transparent',
  },
};

export const buttons = exportTheme({
  ...main,
});
