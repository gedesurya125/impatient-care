import React from 'react';

// External Components
import { Button } from '@gedesurya125/surya-ui';
import { ThemeUIStyleObject } from 'theme-ui';

interface SubmitButtonProps {
  sx?: ThemeUIStyleObject;
}

export const SubmitButton = ({ sx }: SubmitButtonProps) => {
  return (
    <Button
      className="__submit-button"
      type="submit"
      sx={{
        mt: 'small',
        ...sx,
      }}
    >
      Submit
    </Button>
  );
};
