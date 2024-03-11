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
      {
        recordGroup: 'EIUC05',
        name: 'EIUC Strategic Planning',
      },
      {
        recordGroup: 'EIUC06',
        name: 'Policies, Manuals, Handbooks',
      },
      {
        recordGroup: 'EIUC07',
        name: 'EIUC Historical',
      },
      {
        recordGroup: 'EIUC08',
        name: 'Perjanjian, Kontrak & Pernyataan',
      },
      {
        recordGroup: 'EIUC09',
        name: 'Serah Terima Jabatan',
      },
      {
        recordGroup: 'EIUC11',
        name: 'Presidential Miscellaneous',
      },
      {
        recordGroup: 'EIUC12',
        name: 'Personal & General Case',
      },
      {
        recordGroup: 'EIUC13',
        name: 'Evaluation & Survey',
      },
      {
        recordGroup: 'EIUC16',
        name: 'Secretariat Miscellaneous',
      },
      {
        recordGroup: 'EIUC17',
        name: 'EIUC Committees (Standing & Adhoc)',
      },
      {
        recordGroup: 'EIUC21',
        name: 'Treasury Miscellaneous',
      },
      {
        recordGroup: 'EIUC22',
        name: 'Accounting Department',
      },
      {
        recordGroup: 'EIUC31',
        name: 'Adventist Mission',
      },
      {
        recordGroup: 'EIUC32',
        name: 'Children Ministry',
      },
      {
        recordGroup: 'EIUC33',
        name: 'Communication',
      },
      {
        recordGroup: 'EIUC34',
        name: 'Education',
      },
      {
        recordGroup: 'EIUC35',
        name: 'Family Ministry',
      },
      {
        recordGroup: 'EIUC36',
        name: 'Health',
      },
      {
        recordGroup: 'EIUC37',
        name: 'Ministerial/PARL',
      },
      {
        recordGroup: 'EIUC38',
        name: 'Publishing',
      },
      {
        recordGroup: 'EIUC39',
        name: 'Sabbath School/Personal Ministries',
      },
      {
        recordGroup: 'EIUC40',
        name: 'Shepherdess International',
      },
      {
        recordGroup: 'EIUC41',
        name: 'Stewardship/Trust Services',
      },
      {
        recordGroup: 'EIUC42',
        name: "Women's Ministry",
      },
      {
        recordGroup: 'EIUC43',
        name: 'Youth Ministries',
      },
      {
        recordGroup: 'EIUC44',
        name: 'Radio/Hope Channel',
      },
      {
        recordGroup: 'EIUC45',
        name: 'Church Ministries (90an)',
      },
      {
        recordGroup: 'EIUC46',
        name: 'NDR-IEL',
      },
      {
        recordGroup: 'EIUC51',
        name: 'Adventist Aviation Indonesia',
      },
      {
        recordGroup: 'EIUC52',
        name: 'Adventist English Conversation School',
      },
      {
        recordGroup: 'EIUC53',
        name: 'Klabat University',
      },
      {
        recordGroup: 'EIUC54',
        name: 'MAH/Clinic',
      },
      {
        recordGroup: 'EIUC61',
        name: 'Bolmong & Gorontalo Mission',
      },
      {
        recordGroup: 'EIUC62',
        name: 'Central Sulawesi Mission',
      },
      {
        recordGroup: 'EIUC63',
        name: 'Luwu Tana Toraja Mission',
      },
      {
        recordGroup: 'EIUC64',
        name: 'Maluku Mission',
      },
      {
        recordGroup: 'EIUC65',
        name: 'Minahasa Conference',
      },
      {
        recordGroup: 'EIUC66',
        name: 'North Minahasa Bitung Mission',
      },
      {
        recordGroup: 'EIUC67',
        name: 'North Maluku Conference',
      },
      {
        recordGroup: 'EIUC68',
        name: 'Northern Island Mission',
      },
      {
        recordGroup: 'EIUC69',
        name: 'Papua Mission',
      },
      {
        recordGroup: 'EIUC70',
        name: 'South Sulawesi Mission',
      },
      {
        recordGroup: 'EIUC71',
        name: 'West Papua Mission',
      },
      {
        recordGroup: 'EIUC81',
        name: 'Southern Asia-Pacific Division',
      },
      {
        recordGroup: 'EIUC82',
        name: 'General Conference',
      },
      {
        recordGroup: 'EIUC83',
        name: 'Government',
      },
      {
        recordGroup: 'EIUC84',
        name: '1000 Missionary Movement',
      },
      {
        recordGroup: 'EIUC85',
        name: 'ADRA',
      },
      {
        recordGroup: 'EIUC86',
        name: 'YAPI',
      },
      {
        recordGroup: 'EIUC87',
        name: 'WIUM/IPH',
      },
      {
        recordGroup: 'EIUC88',
        name: 'Churches',
      },
      {
        recordGroup: 'EIUC91',
        name: 'Lead Seminar',
      },
      {
        recordGroup: 'EIUC92',
        name: 'Advisory',
      },
      {
        recordGroup: 'EIUC93',
        name: 'Artikel',
      },
      {
        recordGroup: 'EIUC94',
        name: 'Seminar Materials',
      },
      {
        recordGroup: 'EIUC95',
        name: 'Emphasis Week/Day',
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

  await prisma.alphabet.createMany({
    data: [
      {
        id: 'A',
      },
      {
        id: 'B',
      },
      {
        id: 'C',
      },
      {
        id: 'D',
      },
      {
        id: 'E',
      },
      {
        id: 'F',
      },
    ],
  });

  await prisma.number.createMany({
    data: [
      {
        id: '1',
        name: 'I.',
      },
      {
        id: '2',
        name: 'II.',
      },
      {
        id: '3',
        name: 'III.',
      },
      {
        id: '4',
        name: 'IV.',
      },
      {
        id: '5',
        name: 'V.',
      },
      {
        id: '6',
        name: 'VI.',
      },
      {
        id: '7',
        name: 'VII.',
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
