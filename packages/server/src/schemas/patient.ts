export const typeDef = `#graphql
  type Patient {
    id: ID!
    createdAt: String
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

  type DeletePatientResponse {
    id:ID!
  }

  type CreatePatientResponse{
    success: Boolean!
    message: String!
    data: Patient
  }

  extend type Mutation {
    createPatient(input:CreatePatient!):CreatePatientResponse!
    updatePatient(id:ID!, input:UpdatePatient!):CreatePatientResponse!
    deletePatient(id:ID!):DeletePatientResponse!
  }
`;

export const resolvers = {
  Query: {
    patients: async (parent: any, args: any, contextValue: any, info: any) =>
      await contextValue.prismaClient.patient.findMany({
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      }),
  },
  Mutation: {
    createPatient: async (
      parent: any,
      { input },
      contextValue: any,
      info: any
    ) => {
      console.log('hi i am called mutation create patient');
      const patient = await contextValue.prismaClient.patient.create({
        data: input,
      });
      if (patient?.id)
        return {
          success: true,
          message: 'patient created',
          data: patient,
        };
      return {
        success: false,
        message: 'patient not created',
        data: {},
      };
    },
  },
};
