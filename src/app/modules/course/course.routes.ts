import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validations';

const router = express.Router();
router.get('/', CourseController.getAllFromDB);
router.get('/:id', CourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(CourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.insertIntoDB
);

router.post(
  '/:id/assign-faculties',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  CourseController.assignFaculties
);
router.delete(
  '/:id/remove-faculties',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  CourseController.removeFaculties
);

/// I intend to explore the update course functionalities in the upcoming module.
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CourseValidation.update),

  CourseController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteByIdFromDB
);

export const courseRoutes = router;
