import { useQuery, gql } from '@apollo/client';

const PATIENTS = gql`
  query Patients {
    patients {
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
`;

export const usePatients = () => {
  return useQuery(PATIENTS);
};
