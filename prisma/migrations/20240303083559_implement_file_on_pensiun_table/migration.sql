/*
  Warnings:

  - You are about to drop the column `gambar` on the `Pensiun` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pensiun" DROP COLUMN "gambar",
ADD COLUMN     "fileId" TEXT;

-- AddForeignKey
ALTER TABLE "Pensiun" ADD CONSTRAINT "Pensiun_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
