import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.academicSemesterCreate),
  AcademicSemesterController.insertIntoDb
);
router.get('/:id', AcademicSemesterController.getDataById);
router.get('/', AcademicSemesterController.getAllFromDb);
export const AcademicSemesterRouter = router;
