import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
