import React from 'react';

// External Components
import { Button } from '@gedesurya125/surya-ui';

interface ActionButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  handleOutsideClick?: () => void;
}

export const ActionButton = ({
  children,
  onClick,
  handleOutsideClick,
  sx,
  ...props
}: ActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="clear"
      sx={{
        width: ['1rem', '1.2rem'],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
