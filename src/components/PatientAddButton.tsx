import React from 'react';

// External Components
import { Button, Box } from '@gedesurya125/surya-ui';

import { PersonAdd } from './icon';
import { PatientFormOverlay } from './PatientFormOverlay';

import { ThemeUIStyleObject } from 'theme-ui';

export const PatientAddButton = ({ sx }: { sx?: ThemeUIStyleObject }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <Button
        variant="iconButton"
        className="patient-add-button"
        onClick={() => {
          setShowOverlay(true);
        }}
        sx={{
          position: 'absolute',
          right: 0,
          bottom: '1rem',
          p: '1rem 2rem',
          bg: 'teal',
          ...sx,
        }}
      >
        <PersonAdd
          sx={{
            color: 'background',
            width: '2rem',
          }}
        />
        <Box
          as="span"
          sx={{
            ml: '1rem',
            fontSize: ['1.3rem', '1.2rem'],
          }}
        >
          Add Patient
        </Box>
      </Button>
      {showOverlay && <PatientFormOverlay handleClose={handleClose} />}
    </>
  );
};
