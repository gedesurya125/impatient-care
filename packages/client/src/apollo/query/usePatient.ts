import { useQuery, gql, useMutation } from '@apollo/client';
import { PatientType } from '../../../../server/types/patientTypes';

const PATIENTS = gql`
  query Patients($input: fetchPatients) {
    patients(input: $input) {
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
  }
`;

const CREATE_PATIENT = gql`
  mutation CreatePatient($input: CreatePatient!) {
    createPatient(input: $input) {
      success
      message
      data {
        id
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
    }
  }
`;

export const usePatients = () => {
  return useQuery(PATIENTS);
};

export const useCreatePatient = () => {
  return useMutation(CREATE_PATIENT, {
    update: (cache, data: any) => {
      console.log(
        'this is the current cache and data after create a patient',
        cache,
        data
      );

      if (!data?.data?.createPatient?.data) return;
      cache.modify({
        fields: {
          patients: (existingPatients = []) => {
            console.log('this is existing patients', existingPatients);

            const newPatientRef = cache.writeFragment({
              data: data?.data?.createPatient?.data,
              fragment: gql`
                fragment newPatient on Patient {
                  id
                  type
                }
              `,
            });
            return [...existingPatients, newPatientRef];
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
