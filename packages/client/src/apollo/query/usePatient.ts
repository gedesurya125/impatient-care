import { useQuery, gql } from "@apollo/client";


const PATIENTS = gql`
query Patients {
  patients {
    age
    gender
    id
    name
  }
}
`


export const usePatients = () => {
  return useQuery(PATIENTS)
}