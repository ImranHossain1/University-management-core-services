/*
  Warnings:

  - You are about to drop the column `Grade` on the `student_enrolled_course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_enrolled_course" DROP COLUMN "Grade",
ADD COLUMN     "grade" TEXT;
