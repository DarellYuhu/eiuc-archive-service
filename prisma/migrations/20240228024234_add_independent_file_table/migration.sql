/*
  Warnings:

  - You are about to drop the column `gambar` on the `Administrasi` table. All the data in the column will be lost.
  - You are about to drop the column `gambar` on the `Sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `gambar` on the `ServiceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `gambar` on the `Surat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Administrasi" DROP COLUMN "gambar",
ADD COLUMN     "fileId" TEXT;

-- AlterTable
ALTER TABLE "Sertifikat" DROP COLUMN "gambar",
ADD COLUMN     "fileId" TEXT;

-- AlterTable
ALTER TABLE "ServiceRecord" DROP COLUMN "gambar",
ADD COLUMN     "fileId" TEXT;

-- AlterTable
ALTER TABLE "Surat" DROP COLUMN "gambar",
ADD COLUMN     "fileId" TEXT;

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Administrasi" ADD CONSTRAINT "Administrasi_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sertifikat" ADD CONSTRAINT "Sertifikat_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surat" ADD CONSTRAINT "Surat_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
