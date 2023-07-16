import React from 'react';
import { PatientType } from '../../../server/types/patientTypes';

import { Overlay, Heading, Box } from '@gedesurya125/surya-ui';

import { AddPatientForm } from 'forms';
import { CloseButton } from './CloseButton';

interface PatientFormOverlay {
  handleClose: () => any;
  patientData?: PatientType;
}

export const PatientFormOverlay = ({
  handleClose,
  patientData,
}: PatientFormOverlay) => {
  return (
    <Overlay
      handleCloseOverlay={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        py: '3rem',
      }}
    >
      <Content handleClose={handleClose} patientData={patientData} />
    </Overlay>
  );
};

// Markup
const Content = ({ handleClose, patientData }: PatientFormOverlay) => {
  // TODO: ADD CANCLE BUTTON
  const isEdit = !!patientData;

  return (
    <Box
      className="__content"
      sx={{
        bg: 'white',
        width: ['90%', '80%', '80%', '80%', '80%'],
        borderRadius: 'medium',
        height: 'min-content',
        position: 'relative',
      }}
    >
      <CloseButton onClick={handleClose} />
      <Header isEdit={isEdit} />
      <Divider />
      <Box
        sx={{
          p: '1rem 2rem 2rem',
          '& form': {
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr 1fr '],
            gap: [0, '0 3rem'],
          },
          '& .__submit-button': {
            alignSelf: 'end',
          },
        }}
      >
        <AddPatientForm patientData={patientData} onComplete={handleClose} />
        {/* <OverlayAside /> */}
      </Box>
    </Box>
  );
};

const Header = ({ isEdit }: { isEdit: boolean }) => {
  return (
    <Heading
      className="__header"
      sx={{
        textAlign: 'center',
        py: '1rem',
        fontFamily: 'body.bold',
      }}
    >
      {isEdit ? 'Patient Edit' : 'Add Patient'}
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
