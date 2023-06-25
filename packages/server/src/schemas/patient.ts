export const typeDef = `#graphql
  extend type Query {
    patients(input: getPatientsInput): [Patient]
  }

  extend type Mutation {
    createPatient(input:CreatePatientInput!):CreatePatientResponse!
    updatePatient(input:UpdatePatientInput!):CreatePatientResponse!
    deletePatient(input: DeletePatientInput!):DeletePatientResponse!
  }
  
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

  input getPatientsInput {
    take: Int
    cursor: String
    order: OrderType
  }


  input CreatePatientInput {
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

  input UpdatePatientInput {
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


  input DeletePatientInput {
    id: ID!
  }

  type DeletePatientResponse {
    id:ID!
  }

  type CreatePatientResponse{
    success: Boolean!
    message: String!
    data: Patient
  }

  
`;

export const resolvers = {
  Query: {
    patients: async (parent: any, args: any, contextValue: any, info: any) => {
      const cursor = args?.input?.cursor;
      const take = args?.input?.take;
      const order = args?.input?.order;

      console.log('patients fetch args', args);

      const cursorProps = !!cursor
        ? {
            cursor: {
              createdAt: new Date(Number(cursor)),
            },
          }
        : undefined;

      return await contextValue.prismaClient.patient.findMany({
        take: !!take ? take : 10,
        skip: !!cursor ? 1 : 0,
        ...cursorProps,
        orderBy: [
          {
            createdAt: order === 'ASC' ? 'asc' : 'desc',
          },
        ],
      });
    },
  },
  Mutation: {
    createPatient: async (
      parent: any,
      { input },
      contextValue: any,
      info: any
    ) => {
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
