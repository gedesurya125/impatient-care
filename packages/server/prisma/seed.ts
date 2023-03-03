import { prismaClient } from './client.js';
import { seed as seedPatientData } from './seed/patient.js';

async function main() {
  console.log('seeding patient');
  await seedPatientData(prismaClient);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
