// External Components
import { Heading, Box, Field, Select } from '@gedesurya125/surya-ui';

import { Formik, Form } from 'formik';

// Local Components
import { FormField, SubmitButton } from 'components/formFields/';
import { AddPatientForm } from 'forms';
// data
import { patientFields } from 'data';

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
