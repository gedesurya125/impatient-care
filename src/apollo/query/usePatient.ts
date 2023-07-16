import { useQuery, gql, useMutation } from '@apollo/client';
import { PatientType } from '../../../../server/types/patientTypes';

const PATIENT_FIELDS = gql`
  fragment patientFields on Patient {
    id
    createdAt
    codeAg
    isSamplingComstock
    roomName
    assessmentDate
    roomNumber
    mrsDate
    rmNumber
    name
    dob
    medicalDiagnose
    diet
    weightMrs
    armCircumference
    estimatedWeight
    actualWeight
    heightMrs
    imtOrWaterLow
    imt
    waterLow
  }
`;

const PATIENTS = gql`
  ${PATIENT_FIELDS}
  query Patients($input: getPatientsInput) {
    patients(input: $input) {
      ...patientFields
    }
  }
`;

const CREATE_PATIENT = gql`
  ${PATIENT_FIELDS}
  mutation CreatePatient($input: CreatePatientInput!) {
    createPatient(input: $input) {
      success
      message
      data {
        ...patientFields
      }
    }
  }
`;

const EDIT_PATIENT = gql`
  ${PATIENT_FIELDS}
  mutation UpdatePatient($input: UpdatePatientInput!) {
    updatePatient(input: $input) {
      data {
        ...patientFields
      }
      message
      success
    }
  }
`;

export const usePatients = () => {
  return useQuery(PATIENTS);
};

export const useEditPatient = () => {
  return useMutation(EDIT_PATIENT, {
    update: (cache, data: any) => {
      console.log('this is the current update cahce and data', cache, data);
    },
    onError: (error) => {
      console.log('Error Edit the patient', error);
    },
  });
};

export const useCreatePatient = () => {
  return useMutation(CREATE_PATIENT, {
    update: (cache, data: any) => {
      if (!data?.data?.createPatient?.data) return;
      cache.modify({
        fields: {
          patients: (existingPatients = []) => {
            const newPatientRef = cache.writeFragment({
              data: data?.data?.createPatient?.data,
              fragment: gql`
                fragment newPatient on Patient {
                  id
                }
              `,
            });

            return [newPatientRef, ...existingPatients];
          },
        },
      });
    },
    onError: (error) => {
      alert(`Error On Create Patient: ${JSON.stringify(error)}`);
      console.log('error crate patient', error);
    },
  });
};
