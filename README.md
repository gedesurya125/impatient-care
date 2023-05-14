# IMPATIENT CARE APP

This app record the patient data and status, to help the nutritionist and the nurse get connected

## Local development setup

1. this app require mongo db installed locally with replica set
2. Start the mongodb database server with replica set run this command ``
3. (Run once only) Generate the database server schema by this command `yarn prisma:generate`
4. (Run once only) Reset the database server data by this command `yarn prisma:reset`
5. (Run once only) Seed the database server data by this command `yarn prisma:seed`
6. Run the dev server by this command `yarn server:dev`
7. Run the dev client by this command `yarn client:dev`
