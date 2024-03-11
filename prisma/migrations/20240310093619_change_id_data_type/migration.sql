/*
  Warnings:

  - The primary key for the `RecordGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Administration" DROP CONSTRAINT "Administration_recordGroupId_fkey";

-- AlterTable
ALTER TABLE "Administration" ALTER COLUMN "recordGroupId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "RecordGroup" DROP CONSTRAINT "RecordGroup_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RecordGroup_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RecordGroup_id_seq";

-- AddForeignKey
ALTER TABLE "Administration" ADD CONSTRAINT "Administration_recordGroupId_fkey" FOREIGN KEY ("recordGroupId") REFERENCES "RecordGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
