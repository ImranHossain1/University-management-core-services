-- AlterTable
ALTER TABLE "StudentEnrolledCourse" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'ONGOING';
