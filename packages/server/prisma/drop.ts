import { prismaClient } from './client.js';


async function drop() {
  await prismaClient.patient.deleteMany()
}
drop()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
