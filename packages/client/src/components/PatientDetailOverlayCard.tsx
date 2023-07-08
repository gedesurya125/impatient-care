import React from 'react';

// External Components
import { Overlay, Box, Heading, Paragraph } from '@gedesurya125/surya-ui';
import { PatientType } from '../../../server/types/patientTypes';
import { patientKeyLabelPair } from 'data';
import { CloseButton } from './CloseButton';

interface PatientDetailPopUpCardProps {
  handleClose: () => void;
  patientData: PatientType;
}

export const PatientDetailPopUpCard = ({
  handleClose,
  patientData,
}: PatientDetailPopUpCardProps) => {
  return (
    <Overlay
      handleCloseOverlay={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Content patientData={patientData} handleClose={handleClose} />
    </Overlay>
  );
};

const Content = ({
  patientData: {
    actualWeight,
    armCircumference,
    assessmentDate,
    codeAg,
    createdAt,
    diet,
    dob,
    estimatedWeight,
    heightMrs,
    imt,
    imtOrWaterLow,
    isSamplingComstock,
    medicalDiagnose,
    mrsDate,
    name,
    rmNumber,
    roomName,
    roomNumber,
    waterLow,
    weightMrs,
  },
  handleClose,
}: {
  patientData: PatientType;
  handleClose: () => void;
}) => {
  return (
    <Box
      sx={{
        minWidth: '33rem',
        minHeight: '30rem',
        bg: 'white',
        borderRadius: 'medium',
        display: 'grid',
        gridTemplateColumns: 'auto auto 1fr',
        p: 'small',
        position: 'relative',
      }}
    >
      <CloseButton onClick={handleClose} />
      <LabelAndValue label={patientKeyLabelPair.name} value={name} />
      <LabelAndValue label={patientKeyLabelPair.roomName} value={roomName} />
      <LabelAndValue
        label={patientKeyLabelPair.roomNumber}
        value={roomNumber}
      />
      <LabelAndValue label={patientKeyLabelPair.rmNumber} value={rmNumber} />
      <LabelAndValue label={patientKeyLabelPair.waterLow} value={waterLow} />
      <LabelAndValue label={patientKeyLabelPair.weightMrs} value={weightMrs} />
      <LabelAndValue
        label={patientKeyLabelPair.actualWeight}
        value={actualWeight}
      />
      <LabelAndValue
        label={patientKeyLabelPair.armCircumference}
        value={armCircumference}
      />
      <LabelAndValue
        label={patientKeyLabelPair.assessmentDate}
        value={assessmentDate}
      />
      <LabelAndValue label={patientKeyLabelPair.codeAg} value={codeAg} />
      <LabelAndValue label={patientKeyLabelPair.createdAt} value={createdAt} />
      <LabelAndValue label={patientKeyLabelPair.diet} value={diet} />
      <LabelAndValue label={patientKeyLabelPair.dob} value={dob} />
      <LabelAndValue
        label={patientKeyLabelPair.estimatedWeight}
        value={estimatedWeight}
      />
      <LabelAndValue label={patientKeyLabelPair.heightMrs} value={heightMrs} />
      <LabelAndValue label={patientKeyLabelPair.imt} value={imt} />
      <LabelAndValue label={patientKeyLabelPair.waterLow} value={waterLow} />
      <LabelAndValue
        label={patientKeyLabelPair.imtOrWaterLow}
        value={imtOrWaterLow}
      />
      <LabelAndValue
        label={patientKeyLabelPair.isSamplingComstock}
        value={isSamplingComstock}
      />
      <LabelAndValue
        label={patientKeyLabelPair.medicalDiagnose}
        value={medicalDiagnose}
      />
      <LabelAndValue label={patientKeyLabelPair.mrsDate} value={mrsDate} />
    </Box>
  );
};

const LabelAndValue = ({
  label,
  value,
}: {
  label: string;
  value?: string | boolean | Date | number;
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Label>:</Label>
      <Label>{value?.toString()}</Label>
    </>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paragraph
      sx={{
        fontSize: '1.3rem',
        p: '0.3rem 0.5rem',
      }}
    >
      {children}
    </Paragraph>
  );
};
