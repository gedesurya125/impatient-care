export const typeDef = `#graphql
  type Patient {
    id: ID!
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: Int
    mrsDate: String
    rmNumber: Int
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:Float # todo: alter to String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
  }

  extend type Query {
    patients: [Patient]
  }

  input CreatePatient {
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: Int
    mrsDate: String
    rmNumber: Int
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:Float
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
  }

  input UpdatePatient {
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: Int
    mrsDate: String
    rmNumber: Int
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:Float
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
  }

  type DeletedPatient {
    id:ID!
  }

  extend type Mutation {
    createPatient(input:CreatePatient!):Patient!
    updatePatient(id:ID!, input:UpdatePatient!):Patient!
    deletePatient(id:ID!):DeletedPatient!
  }
`;

export const resolvers = {
  Query: {
    patients: async (parent: any, args: any, contextValue: any, info: any) =>
      await contextValue.prismaClient.patient.findMany(),
  },
};
