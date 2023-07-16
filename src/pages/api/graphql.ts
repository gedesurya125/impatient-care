import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { apolloServer } from 'apollo/apolloServer';
import { prismaClient } from '../../../prisma/client';

// import allowCors from 'apollo/cors';

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    prismaClient,
    req,
    res,
  }),
});

// export default allowCors(handler);
export default handler;
