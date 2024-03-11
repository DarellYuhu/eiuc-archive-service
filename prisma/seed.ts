import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.createMany({
    data: [
      {
        namaLengkap: 'administrator',
        username: 'admin',
        password:
          '$2b$10$8E690c0IzPDH/qtIIlDS6eDDRdKx9tjJg3L0wxhoDxGQdkSu7DntS',
        role: 'ADMIN',
      },
      {
        namaLengkap: 'operator',
        username: 'operator',
        password:
          '$2b$10$8E690c0IzPDH/qtIIlDS6eDDRdKx9tjJg3L0wxhoDxGQdkSu7DntS',
        role: 'OPERATOR',
      },
      {
        namaLengkap: 'Happy Sibilang',
        username: 'sibilang',
        password:
          '$2b$10$8E690c0IzPDH/qtIIlDS6eDDRdKx9tjJg3L0wxhoDxGQdkSu7DntS',
        role: 'USER',
      },
    ],
  });

  await prisma.recordGroup.createMany({
    data: [
      {
        recordGroup: 'EIUC01',
        name: 'Badan Hukum',
      },
      {
        recordGroup: 'EIUC02',
        name: 'EIUC Session/Year End/Midyear',
      },
      {
        recordGroup: 'EIUC03',
        name: 'EIUC Executive Committee',
      },
      {
        recordGroup: 'EIUC04',
        name: 'EIUC Administrative Committee',
      },
    ],
  });

  await prisma.institution.createMany({
    data: [
      {
        institutionName: 'EIUC',
      },
      {
        institutionName: 'AECS',
      },
      {
        institutionName: 'AAI',
      },
      {
        institutionName: 'RSAM',
      },
      {
        institutionName: 'Unklab',
      },
      {
        institutionName: 'Daerah/Konfrens',
      },
      {
        institutionName: 'None',
      },
    ],
  });

  await prisma.physicalBuilding.createMany({
    data: [
      {
        physicalName: 'Permanen',
      },
      {
        physicalName: 'Semi Permanen',
      },
      {
        physicalName: 'Tanah Kosong',
      },
      {
        physicalName: 'Permanen dan Lapangan',
      },
      {
        physicalName: 'Tidak Jelas',
      },
    ],
  });

  await prisma.conferenceArea.createMany({
    data: [
      {
        conferenceAreaName: 'WPM',
      },
      {
        conferenceAreaName: 'UNKLAB',
      },
      {
        conferenceAreaName: 'NMC',
      },
      {
        conferenceAreaName: 'PM',
      },
      {
        conferenceAreaName: 'EIUC',
      },
      {
        conferenceAreaName: 'NIM',
      },
      {
        conferenceAreaName: 'MC',
      },
      {
        conferenceAreaName: 'CSM',
      },
      {
        conferenceAreaName: 'MAH',
      },
      {
        conferenceAreaName: 'SSC',
      },
      {
        conferenceAreaName: 'MM',
      },
      {
        conferenceAreaName: 'LTM',
      },
      {
        conferenceAreaName: 'BGM',
      },
      {
        conferenceAreaName: 'NMBM',
      },
      {
        conferenceAreaName: 'AECS',
      },
      {
        conferenceAreaName: 'MNMC',
      },
    ],
  });

  await prisma.department.createMany({
    data: [
      {
        departmentName: 'President',
      },
      {
        departmentName: 'Secretariat',
      },
      {
        departmentName: 'Treasurer',
      },
      {
        departmentName: 'Adventist Mission',
      },
      {
        departmentName: 'Children Ministry',
      },
      {
        departmentName: 'Family Ministry',
      },
      {
        departmentName: 'Womens Ministry',
      },
      {
        departmentName: 'Publishing',
      },
      {
        departmentName: 'SS/PM',
      },
      {
        departmentName: 'Health',
      },
      {
        departmentName: 'Shepherdess',
      },
      {
        departmentName: 'Education',
      },
      {
        departmentName: 'Youth',
      },
      {
        departmentName: 'Communication',
      },
      {
        departmentName: 'Ministerial',
      },
      {
        departmentName: 'Badan Hukum',
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
