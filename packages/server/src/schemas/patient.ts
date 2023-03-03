export const typeDef = `#graphql
  type Patient {
    id: ID!
    name:String
    age:Int
    gender: String
  }

  extend type Query {
    patients: [Patient]
  }

  input CreatePatient {
    name: String
    age: Int
    gender: Int
  }

  input UpdatePatient {
    name: String
    age: Int
    gender: Int
  }

  type DeletedPatient {
    id:ID!
  }

  type Mutation {
    createPatient(input:CreatePatient!):Patient!
    updatePatient(id:ID!, input:UpdatePatient!):Patient!
    deletePatient(id:ID!):DeletedPatient!
  }
`;


export const resolvers = {
  Query: {
    patients: () => patients,
  },
};


// Fake data
const patients = [
  {
    id: 1,
    name: 'person one',
    age: 29,
    gender: 'male'
  },
  {
    id: 2,
    name: 'person one',
    age: 29,
    gender: 'male'
  },
  {
    id: 3,
    name: 'person one',
    age: 29,
    gender: 'male'
  },
  {
    id: 3,
    name: 'person one',
    age: 29,
    gender: 'male'
  }
]

