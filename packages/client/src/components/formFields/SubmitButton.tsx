import React from 'react';

// External Components
import { Box, Button } from '@gedesurya125/surya-ui';
import { ThemeUIStyleObject } from 'theme-ui';
import { Spinner } from 'assets';

interface SubmitButtonProps {
  loading?: boolean;
  disabled?: boolean;
  sx?: ThemeUIStyleObject;
}

export const SubmitButton = ({ sx, loading, disabled }: SubmitButtonProps) => {
  return (
    <Button
      disabled={disabled || loading}
      className="__submit-button"
      type="submit"
      sx={{
        mt: 'small',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Box
        as="span"
        sx={{
          opacity: loading ? 0 : 1,
        }}
      >
        Submit
      </Box>
      {loading && (
        <Spinner
          sx={{
            width: '2rem',
            position: 'absolute',
          }}
        />
      )}
    </Button>
  );
};
