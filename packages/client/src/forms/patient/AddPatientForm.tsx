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

// Type

export const AddPatientForm = ({
  patientData,
}: {
  patientData?: PatientType;
}) => {
  const [createPatient, { loading }] = useCreatePatient();

  const isEdit = !!patientData;
  return (
    <Formik
      enableReinitialize
      initialValues={createFormInitialValue(patientFields, patientData)}
      onSubmit={async (values, { resetForm }) => {
        console.log('this is the values TO BE SEND', values);
        if (!isEdit) {
          await createPatient({
            variables: {
              input: values,
            },
            onCompleted: () => {
              alert('Create Patient Success');
              resetForm();
            },
          });
        }
      }}
    >
      {(props) => {
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
