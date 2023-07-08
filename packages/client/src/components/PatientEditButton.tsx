import React from 'react';
import { EditButton } from './EditIconButton';
import { PatientType } from '../../../server/types/patientTypes';

import { PatientFormOverlay } from './PatientFormOverlay';

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
        <PatientFormOverlay
          handleClose={closeEditForm}
          patientData={patientData}
        />
      )}
    </>
  );
};
