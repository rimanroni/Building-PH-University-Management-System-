import { Router } from "express";
import { academicController } from "./academic.controller";
import { validationRequest } from "../../middlewares/validationRequest";
import { academicValidation } from "./academic.validation";

const router = Router(); 
router.get('/', academicController.getAllSemester);

router.post('/create-academic-semester', validationRequest(academicValidation.createAcademicValidation), academicController.createAcademic);

router.get('/:SemesterId', academicController.getSingleSemester);


router.put('/:SemesterId', validationRequest(academicValidation.updateAcademicValidation), academicController.updateSemester)
export const AcademicRouter = router