import React from 'react';

// External Components
import {
  GridTemplate,
  Heading,
  Box,
  Button,
  Paragraph,
} from '@gedesurya125/surya-ui';
import { ThemeUIStyleObject } from 'theme-ui';

import { PatientType } from '../../../server/types/patientTypes';

// Local Components

// Data
import { usePatients } from 'apollo/query';
import { patientFields } from 'data';
import { Spinner } from 'assets';
import { getDate } from 'helper';

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
          height: '70vh',
          borderRadius: 'medium',
          p: 'xSmall',
          position: 'relative',
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
  const { data, loading, fetchMore } = usePatients();
  const [disableLoadMore, setDisableLoadMore] = React.useState(false);

  const handleLoadMore = async () => {
    const result = await fetchMore({
      variables: {
        input: {
          take: 10,
          cursor: data?.patients[data.patients.length - 1].createdAt,
        },
      },
    });

    if (result.data.patients.length === 0) setDisableLoadMore(true);
    console.log('this is the result', result);
  };

  if (loading || data?.patients?.length === 0)
    return (
      <Spinner
        sx={{
          color: 'primary',
          width: '2rem',
          position: 'absolute',
          top: 'calc(50% - 1rem)',
          left: 'calc(50% - 1rem)',
        }}
      />
    );
  return (
    <>
      <Box
        as="table"
        sx={{
          width: 'max-content',
          borderCollapse: 'collapse',
        }}
      >
        <TableHead />
        <TableBody data={data} />
      </Box>
      {disableLoadMore ? (
        <Paragraph
          sx={{
            mt: '2rem',
            fontFamily: 'body.bold',
            lineHeight: 1.5,
            fontSize: '2rem',
          }}
        >
          End of data is reached
        </Paragraph>
      ) : (
        <Button
          disabled={disableLoadMore}
          variant="secondary"
          onClick={handleLoadMore}
          sx={{
            mt: '2rem',
          }}
        >
          Load More
        </Button>
      )}
    </>
  );
};

const TableHead = () => {
  return (
    <Box as="thead">
      <Box as="tr">
        <TableRowItem
          key="no"
          text="No"
          sx={{
            fontFamily: 'body.bold',
          }}
        />
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

const TableBody = ({ data }: { data: any }) => {
  return (
    <Box as="tbody">
      {data?.patients.map((data: PatientType, index: number) => {
        return (
          <TableBodyRow key={index} number={index + 1} patientData={data} />
        );
      })}
    </Box>
  );
};

const TableBodyRow = ({
  patientData: {
    createdAt,
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
  return (
    <Box as="tr">
      <TableRowItem text={number} />
      <TableRowItem
        text={
          // createdAt ? new Date(Number(createdAt)).toString().slice(0, 24) : ''
          createdAt ? getDate(createdAt) : ''
        }
      />
      <TableRowItem text={codeAg} />
      <TableRowItem text={isSamplingComstock.toString()} />
      <TableRowItem text={roomName} />
      <TableRowItem text={getDate(assessmentDate)} />
      <TableRowItem text={roomNumber} />
      <TableRowItem text={getDate(mrsDate)} />
      <TableRowItem text={rmNumber} />
      <TableRowItem text={name} />
      <TableRowItem text={getDate(dob)} />
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
        fontFamily: 'body.normal',
        lineHeight: 1.3,
        fontSize: ['1.2rem', '1.3rem'],
        ...sx,
      }}
      {...props}
    >
      {text}
    </Box>
  );
};
