// External Components
import { Heading, Box, Field, Select } from '@gedesurya125/surya-ui';

import { Formik, Form } from 'formik';

// Local Components
import { FormField, SubmitButton } from 'components/formFields/';

// data
import { patientFields } from 'data';
import { createEmptyFormInitialValue } from 'utils';

// Hooks
import { useCreatePatient } from 'apollo/query';

// Type

export default function AddPatient() {
  return (
    <>
      <Headline />
      <AddPatientForm />
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
    Welcome to Add Patient
  </Heading>
);

const AddPatientForm = () => {
  const [createPatient] = useCreatePatient();

  return (
    <Formik
      enableReinitialize
      initialValues={createEmptyFormInitialValue(patientFields)}
      onSubmit={async (values) => {
        console.log('this is the values TO BE SEND', values);
        await createPatient({
          variables: {
            input: values,
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
            <SubmitButton />
          </Form>
        );
      }}
    </Formik>
  );
};
