// External Components
import React from 'react';

import { Formik, Form } from 'formik';

// Local Components
import { FormField, SubmitButton } from 'components/formFields/';

// data
import { patientFields } from 'data';
import { createEmptyFormInitialValue } from 'utils';

// Hooks
import { useCreatePatient } from 'apollo/query';

// Type

export const AddPatientForm = () => {
  const [createPatient, { loading }] = useCreatePatient();

  return (
    <Formik
      enableReinitialize
      initialValues={createEmptyFormInitialValue(patientFields)}
      onSubmit={async (values, { resetForm }) => {
        console.log('this is the values TO BE SEND', values);
        await createPatient({
          variables: {
            input: values,
          },
          onCompleted: () => {
            alert('Create Patient Success');
            resetForm();
          },
        });
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
            <SubmitButton loading={loading} />
          </Form>
        );
      }}
    </Formik>
  );
};
