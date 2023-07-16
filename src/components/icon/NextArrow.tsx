import React from 'react';

// External Components
import { Box } from '@gedesurya125/surya-ui';

// types
import { SvgProps } from 'types';

export const NextArrow = ({ sx, ...props }: SvgProps) => {
  return (
    <Box
      as="svg"
      // @ts-ignore
      viewBox="0 0 22 48"
      fill="none"
      sx={{
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      <path
        d="M22 0H16.2462L0 24L16.2462 48H22L5.07692 24L22 0Z"
        fill="currentColor"
      />
    </Box>
  );
};
