import { Router } from "express";
import { StudentController } from "./student.controller";

const router = Router();

 
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudentController)
// delet student 
router.delete('/:studentId', StudentController.deleteStudent)

export const StudentRouter = router;
