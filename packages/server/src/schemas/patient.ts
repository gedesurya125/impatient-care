export const typeDef = `#graphql
  type Patient {
    id: ID!
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: String
    mrsDate: String
    rmNumber: String
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
    waterLow:Float
  }

  extend type Query {
    patients: [Patient]
  }

  input CreatePatient {
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: String
    mrsDate: String
    rmNumber: String
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
    waterLow:Float
  }

  input UpdatePatient {
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: String
    mrsDate: String
    rmNumber: String
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
    waterLow:Float
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
