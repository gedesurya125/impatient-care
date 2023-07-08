import React, { ReactElement } from 'react';

// External Components
import {
  GridTemplate,
  Heading,
  Box,
  Button,
  Paragraph,
} from '@gedesurya125/surya-ui';
import { ThemeUIStyleObject, ButtonProps } from 'theme-ui';

import { PatientType } from '../../../server/types/patientTypes';

// Local Components

// Data
import { usePatients } from 'apollo/query';
import { patientFields, patientKeyLabelPair } from 'data';
import { Spinner } from 'assets';
import { getDate } from 'helper';
import {
  ActionButton,
  DeleteButton,
  EditButton,
  PatientDetailOverlay,
  PatientDetailPopUpCard,
  PatientEditButton,
} from 'components';
import { PenToSquare, TrashCan } from 'components/icon';
import { gql, useApolloClient } from '@apollo/client';
import { PatientAddButton } from 'components/PatientAddButton';

export default function PatientList() {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: '100%',
          overflow: 'scroll',
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

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Headline />
      <PatientAddButton />
    </Box>
  );
};

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
  const { cache } = useApolloClient();

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
    cache.modify({
      fields: {
        patients: (existingPatients = []) => {
          const resultRefs = result.data.patients.map((patientData: any) => {
            return cache.writeFragment({
              data: patientData,
              fragment: gql`
                fragment newPatient on Patient {
                  id
                }
              `,
            });
          });
          return [...existingPatients, ...resultRefs];
        },
      },
    });
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
          borderCollapse: 'collapse',
          minWidth: ['max-content', '100%'],
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
  const tableHeadContent = [
    'No.',
    patientKeyLabelPair.roomName,
    patientKeyLabelPair.roomNumber,
    patientKeyLabelPair.rmNumber,
    patientKeyLabelPair.name,
    patientKeyLabelPair.medicalDiagnose,
    'Actions',
  ];
  return (
    <Box as="thead">
      <Box as="tr">
        {tableHeadContent.map((label) => {
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
  const [showMenu, setShowMenu] = React.useState<{
    patientData: PatientType | null;
  }>({
    patientData: null,
  });

  const handleCloseOverlay = () => {
    setShowMenu({ patientData: null });
  };

  return (
    <>
      <Box as="tbody">
        {data?.patients.map((data: PatientType, index: number) => {
          return (
            <TableBodyRow
              key={index}
              number={index + 1}
              patientData={data}
              onClick={() => {
                setShowMenu({ patientData: data });
              }}
            />
          );
        })}
      </Box>
      {showMenu.patientData !== null && (
        <PatientDetailPopUpCard
          handleClose={handleCloseOverlay}
          patientData={showMenu.patientData}
        />
      )}
    </>
  );
};

type MousePosition = {
  x: number;
  y: number;
  patientData: PatientType | null;
};

type ShowMenu = MousePosition | boolean;

const TableBodyRow = ({
  patientData,
  number,
  onClick,
}: {
  patientData: PatientType;
  number: number;
  onClick?: () => void;
}) => {
  const { roomName, roomNumber, rmNumber, name, medicalDiagnose } = patientData;

  return (
    <Box
      as="tr"
      className="table-body-row"
      sx={{
        ':hover': {
          bg: 'secondary',
          cursor: 'pointer',
          color: 'background',
        },
      }}
    >
      <TableRowItem text={number} onClick={onClick} />
      <TableRowItem text={roomName} onClick={onClick} />
      <TableRowItem text={roomNumber} onClick={onClick} />
      <TableRowItem text={rmNumber} onClick={onClick} />
      <TableRowItem text={name} onClick={onClick} />
      <TableRowItem text={medicalDiagnose} onClick={onClick} />
      <ActionCell patientData={patientData} />
    </Box>
  );
};

const ActionCell = ({ patientData }: { patientData: PatientType }) => {
  return (
    <TableRowItem
      sx={{
        textAlign: 'center',
      }}
    >
      <PatientEditButton patientData={patientData} />
      <DeleteButton
        sx={{
          ml: ['1rem', '2rem'],
        }}
        onClick={() => {
          alert('delete button');
        }}
      />
    </TableRowItem>
  );
};

const TableRowItem = ({
  text,
  sx,
  children,
  onClick,
  ...props
}: {
  text?: string | number;
  sx?: ThemeUIStyleObject;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  const asButtonRoleProps = onClick
    ? {
        role: 'button',
        'aria-pressed': false,
        tabIndex: 0,
        onClick,
        onKeyDown: (e: React.KeyboardEvent<HTMLTableCellElement>) => {
          if (e.key === ' ') {
            onClick();
          }
        },
      }
    : {};

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
      {...asButtonRoleProps}
    >
      {text}
      {children}
    </Box>
  );
};
