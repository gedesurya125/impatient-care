import React from 'react';

// External Components
import { Button } from '@gedesurya125/surya-ui';
import { Cross } from './icon';
import { IconButtonPropTypes } from 'types';

export const CloseButton = ({ onClick, sx }: IconButtonPropTypes) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        position: 'absolute',
        width: '3rem',
        top: '-1.5rem',
        right: '-1.5rem ',
        ...sx,
      }}
      variant="iconButton"
    >
      <Cross
        sx={{
          color: 'danger',
          bg: 'white',
        }}
      />
    </Button>
  );
};
