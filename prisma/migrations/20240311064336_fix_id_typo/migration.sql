/*
  Warnings:

  - You are about to drop the column `conferenceAreaid` on the `Certificate` table. All the data in the column will be lost.
  - Added the required column `conferenceAreaId` to the `Certificate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_conferenceAreaid_fkey";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "conferenceAreaid",
ADD COLUMN     "conferenceAreaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_conferenceAreaId_fkey" FOREIGN KEY ("conferenceAreaId") REFERENCES "ConferenceArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
