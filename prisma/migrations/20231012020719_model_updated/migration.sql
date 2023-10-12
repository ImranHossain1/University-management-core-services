/*
  Warnings:

  - You are about to drop the column `totalDeuAmount` on the `student_semester_payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_semester_payments" DROP COLUMN "totalDeuAmount",
ADD COLUMN     "totalDueAmount" INTEGER DEFAULT 0;
