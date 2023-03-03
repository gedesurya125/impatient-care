
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
    patients: async (parent: any, args: any, contextValue: any, info: any) => await contextValue.prismaClient.patient.findMany(),
  },
};

