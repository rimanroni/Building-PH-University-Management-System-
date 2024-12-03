import { Router } from "express";
import { StudentController } from "./student.controller";

const router = Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudentController)
export const StudentRouter = router;
