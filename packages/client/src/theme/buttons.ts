import { exportTheme } from './helper';

const defaultButton = {
  fontFamily: 'body.bold',
  lineHeight: 1,
  width: 'min-content',
  whiteSpace: 'nowrap',
  p: '1rem 2rem',
  cursor: 'pointer',
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
};

export const buttons = exportTheme({
  ...main,
});
