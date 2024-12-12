import {   Router } from "express";
import { UserController } from "./user.controller";
 
import { studentValidation } from "../student/student.validation.zod";
import { validationRequest } from "../../middlewares/validationRequest";
  

const router = Router();

router.post('/create-student', validationRequest( studentValidation.createStudentSchemaZod),  UserController.createStudent );
  

export const userRouter = router;
