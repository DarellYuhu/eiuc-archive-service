/*
  Warnings:

  - You are about to drop the column `topic` on the `Letter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Letter" DROP COLUMN "topic",
ADD COLUMN     "description" TEXT;
