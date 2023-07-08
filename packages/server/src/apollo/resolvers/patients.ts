export const patientResolvers = {
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
