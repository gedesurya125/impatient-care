// External Components
import React from 'react';

import { Formik, Form } from 'formik';

// Local Components
import { FormField, SubmitButton } from 'components/formFields/';

// data
import { patientFields } from 'data';
import { createFormInitialValue } from 'utils';

// Hooks
import { useCreatePatient } from 'apollo/query';
import { PatientType } from '../../../../server/types/patientTypes';
import { prepareValueForPatientApi } from './prepareValueForPatientApi';

// Type

export const AddPatientForm = ({
  patientData,
}: {
  patientData?: PatientType;
}) => {
  const [createPatient, { loading }] = useCreatePatient();

  const isEdit = !!patientData;
  // TODO: ADD VALIDATION SCHEMA
  return (
    <Formik
      enableReinitialize
      initialValues={createFormInitialValue(patientFields, patientData)}
      onSubmit={async (values, { resetForm }) => {
        const preparedValue = prepareValueForPatientApi(values);
        if (!isEdit) {
          await createPatient({
            variables: {
              input: preparedValue,
            },
            onCompleted: () => {
              alert('Create Patient Success');
              resetForm();
            },
          });
        }
      }}
    >
      {({ dirty }) => {
        return (
          <Form>
            {patientFields.map(({ key, label, options, type }) => {
              return (
                <FormField
                  key={key}
                  name={key}
                  label={label}
                  options={options}
                  type={type}
                  sx={{
                    mt: '2rem',
                  }}
                />
              );
            })}
            <SubmitButton
              loading={loading}
              disabled={!dirty}
              sx={{
                ml: 'auto',
              }}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
