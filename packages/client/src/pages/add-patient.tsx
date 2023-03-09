// External Components
import { Heading, Box, Field, Select } from '@gedesurya125/surya-ui';

import { Formik, Form } from 'formik';

// Local Components
import { FormField } from 'components/formFields/';

// data
import { patientFields } from 'data';

// Type

export default function AddPatient() {
  return (
    <Box
      as="main"
      id="home-page"
      sx={{
        p: 'small',
      }}
    >
      <Headline />
      <AddPatientForm />
    </Box>
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
  return (
    <Formik
      initialValues={{
        name: '',
        medicalDiagnose: '',
        diet: '',
        isSamplingComstock: false,
      }}
      onSubmit={(values) => {
        console.log('this is the values', values);
      }}
    >
      {(props) => {
        console.log('this is the formik values', props.values);

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
          </Form>
        );
      }}
    </Formik>
  );
};
