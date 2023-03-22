import React from 'react';

// ExternalComponents
import { Overlay, Heading, Paragraph, Box } from '@gedesurya125/surya-ui';
import { PatientType } from '../../../server/types/patientTypes';

import { patientFields } from 'data';
import { FormFieldProps } from 'types';
import { AddPatientForm } from 'forms';

interface PatientDetailOverlayProps {
  handleClose: () => any;
  patientData: PatientType;
}

export const PatientDetailOverlay = ({
  handleClose,
  patientData,
}: PatientDetailOverlayProps) => {
  return (
    <Overlay
      handleCloseOverlay={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        py: '2rem',
      }}
    >
      <Content handleClose={handleClose} patientData={patientData} />
    </Overlay>
  );
};

// Markup
const Content = ({ handleClose, patientData }: PatientDetailOverlayProps) => {
  // TODO: ADD CANCLE BUTTON
  return (
    <Box
      className="__content"
      sx={{
        bg: 'white',
        width: ['90%', '80%', '80%', '80%', '80%'],
        borderRadius: 'medium',
        height: 'min-content',
      }}
    >
      <Header />
      <Divider />
      <Box
        sx={{
          p: '1rem 2rem 2rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
        }}
      >
        <AddPatientForm patientData={patientData} />
      </Box>
    </Box>
  );
};

const Header = () => {
  return (
    <Heading
      className="__header"
      sx={{
        textAlign: 'center',
        py: '1rem',
      }}
    >
      Patient Detail
    </Heading>
  );
};

const Divider = () => {
  return (
    <Box
      as="hr"
      sx={{
        borderColor: 'primary',
        borderWidth: '1px 0 0 0',
      }}
    />
  );
};
