import React from 'react';
import { EditButton } from './EditIconButton';
import { PatientType } from '../../../server/types/patientTypes';

import {
  Overlay,
  Heading,
  Paragraph,
  Box,
  Button,
} from '@gedesurya125/surya-ui';

import { patientFields } from 'data';
import { FormFieldProps } from 'types';
import { AddPatientForm } from 'forms';

interface PatientEditButtonProps {
  patientData: PatientType;
}

export const PatientEditButton = ({ patientData }: PatientEditButtonProps) => {
  const [showEditForm, setShowEditForm] = React.useState(false);

  const closeEditForm = () => {
    setShowEditForm(false);
  };

  return (
    <>
      <EditButton
        onClick={() => {
          setShowEditForm(true);
        }}
      />
      {showEditForm && (
        <PatientEditOverlay
          handleClose={closeEditForm}
          patientData={patientData}
        />
      )}
    </>
  );
};

interface PatientEditOverlayProps {
  handleClose: () => any;
  patientData?: PatientType;
}

export const PatientEditOverlay = ({
  handleClose,
  patientData,
}: PatientEditOverlayProps) => {
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
const Content = ({ handleClose, patientData }: PatientEditOverlayProps) => {
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
        <AddPatientForm patientData={patientData} />
        {/* <OverlayAside /> */}
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
        fontFamily: 'body.bold',
      }}
    >
      Patient Edit
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

const OverlayAside = () => {
  return (
    <Box>
      <Button variant="secondary">Edit</Button>
      <Button variant="secondary">Delete</Button>
    </Box>
  );
};
