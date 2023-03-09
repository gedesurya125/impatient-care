import React from 'react';

// External Components
import { GridTemplate, Heading, Box } from '@gedesurya125/surya-ui';
import { ThemeUIStyleObject } from 'theme-ui';

import { PatientType } from '../../../server/types/patientTypes';

// Local Components

// Data
import { usePatients } from 'apollo/query';
import { patientFields } from 'data';

export default function PatientList() {
  return (
    <>
      <Headline />
      <Box
        sx={{
          width: '100%',
          overflow: 'auto',
          border: '2px solid',
          borderColor: 'primary',
          minHeight: '70vh',
          borderRadius: 'medium',
          p: 'xSmall',
        }}
      >
        <PatientListTable />
      </Box>
    </>
  );
}

const Headline = () => (
  <Heading
    as="h2"
    sx={{
      fontSize: ['2rem', '3rem'],
      fontFamily: 'body.bold',
    }}
  >
    Welcome to Patient List
  </Heading>
);

const PatientListTable = () => {
  return (
    <Box
      as="table"
      sx={{
        width: 'max-content',
        borderCollapse: 'collapse',
      }}
    >
      <TableHead />
      <TableBody />
    </Box>
  );
};

const TableHead = () => {
  return (
    <Box as="thead">
      <Box as="tr">
        {patientFields.map(({ label }) => {
          return (
            <TableRowItem
              key={label}
              text={label}
              sx={{
                fontFamily: 'body.bold',
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

const TableBody = () => {
  const { data, loading } = usePatients();
  console.log(data);

  if (loading || data?.patients?.length === 0) return null;

  return (
    <Box as="tbody">
      {data.patients.map((data: PatientType, index: number) => {
        return (
          <TableBodyRow key={index} number={index + 1} patientData={data} />
        );
      })}
    </Box>
  );
};

const TableBodyRow = ({
  patientData: {
    codeAg,
    isSamplingComstock,
    roomName,
    assessmentDate,
    roomNumber,
    mrsDate,
    rmNumber,
    name,
    dob,
    medicalDiagnose,
    diet,
    weightMrs,
    armCircumference,
    estimatedWeight,
    actualWeight,
    heightMrs,
    imtOrWaterLow,
    imt,
    waterLow,
  },
  number,
}: {
  patientData: PatientType;
  number: number;
}) => {
  console.log('this is waterlow', waterLow);

  return (
    <Box as="tr">
      <TableRowItem text={number} />
      <TableRowItem text={codeAg} />
      <TableRowItem text={isSamplingComstock.toString()} />
      <TableRowItem text={roomName} />
      <TableRowItem text={assessmentDate} />
      <TableRowItem text={roomNumber} />
      <TableRowItem text={mrsDate} />
      <TableRowItem text={rmNumber} />
      <TableRowItem text={name} />
      <TableRowItem text={dob} />
      <TableRowItem text={medicalDiagnose} />
      <TableRowItem text={diet} />
      <TableRowItem text={weightMrs} />
      <TableRowItem text={armCircumference} />
      <TableRowItem text={estimatedWeight} />
      <TableRowItem text={actualWeight} />
      <TableRowItem text={heightMrs} />
      <TableRowItem text={imtOrWaterLow} />
      <TableRowItem text={imt} />
      <TableRowItem text={waterLow} />
    </Box>
  );
};

const TableRowItem = ({
  text,
  sx,
  ...props
}: {
  text: string | number;
  sx?: ThemeUIStyleObject;
}) => {
  return (
    <Box
      as="td"
      sx={{
        border: '1px solid',
        borderColor: 'primary',
        p: [null, '0.3rem 0.4rem'],
        ...sx,
      }}
      {...props}
    >
      {text}
    </Box>
  );
};
