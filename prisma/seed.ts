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

  await prisma.code.createMany({
    data: [
      {
        code: 'EIUC01',
        nama: 'Badan Hukum',
      },
      {
        code: 'EIUC02',
        nama: 'EIUC Session/Year End/Midyear',
      },
      {
        code: 'EIUC03',
        nama: 'EIUC Executive Committee',
      },
      {
        code: 'EIUC04',
        nama: 'EIUC Administrative Committee',
      },
    ],
  });

  await prisma.institusi.createMany({
    data: [
      {
        namaInstitusi: 'EIUC',
      },
      {
        namaInstitusi: 'AECS',
      },
      {
        namaInstitusi: 'AAI',
      },
      {
        namaInstitusi: 'RSAM',
      },
      {
        namaInstitusi: 'Unklab',
      },
      {
        namaInstitusi: 'Daerah/Konfrens',
      },
      {
        namaInstitusi: 'None',
      },
    ],
  });

  await prisma.fisikBangunan.createMany({
    data: [
      {
        namaFisik: 'Permanen',
      },
      {
        namaFisik: 'Semi Permanen',
      },
      {
        namaFisik: 'Tanah Kosong',
      },
      {
        namaFisik: 'Permanen dan Lapangan',
      },
      {
        namaFisik: 'Tidak Jelas',
      },
    ],
  });

  await prisma.daerahKonfrens.createMany({
    data: [
      {
        namaDaerahKonfrens: 'WPM',
      },
      {
        namaDaerahKonfrens: 'UNKLAB',
      },
      {
        namaDaerahKonfrens: 'NMC',
      },
      {
        namaDaerahKonfrens: 'PM',
      },
      {
        namaDaerahKonfrens: 'EIUC',
      },
      {
        namaDaerahKonfrens: 'NIM',
      },
      {
        namaDaerahKonfrens: 'MC',
      },
      {
        namaDaerahKonfrens: 'CSM',
      },
      {
        namaDaerahKonfrens: 'MAH',
      },
      {
        namaDaerahKonfrens: 'SSC',
      },
      {
        namaDaerahKonfrens: 'MM',
      },
      {
        namaDaerahKonfrens: 'LTM',
      },
      {
        namaDaerahKonfrens: 'BGM',
      },
      {
        namaDaerahKonfrens: 'NMBM',
      },
      {
        namaDaerahKonfrens: 'AECS',
      },
      {
        namaDaerahKonfrens: 'MNMC',
      },
    ],
  });

  await prisma.department.createMany({
    data: [
      {
        namaDepartment: 'President',
      },
      {
        namaDepartment: 'Secretariat',
      },
      {
        namaDepartment: 'Treasurer',
      },
      {
        namaDepartment: 'Adventist Mission',
      },
      {
        namaDepartment: 'Children Ministry',
      },
      {
        namaDepartment: 'Family Ministry',
      },
      {
        namaDepartment: 'Womens Ministry',
      },
      {
        namaDepartment: 'Publishing',
      },
      {
        namaDepartment: 'SS/PM',
      },
      {
        namaDepartment: 'Health',
      },
      {
        namaDepartment: 'Shepherdess',
      },
      {
        namaDepartment: 'Education',
      },
      {
        namaDepartment: 'Youth',
      },
      {
        namaDepartment: 'Communication',
      },
      {
        namaDepartment: 'Ministerial',
      },
      {
        namaDepartment: 'Badan Hukum',
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
