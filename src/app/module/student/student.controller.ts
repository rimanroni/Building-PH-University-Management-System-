 import { StudentServices } from "./student.service";
import sendRespons from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
 
 

const getAllStudents =  catchAsync(async (req , res  ) =>{
       const result = await StudentServices.getAllStudents();
      sendRespons(res, {
        statusCode : StatusCodes.OK, 
        success : true, 
        message : "successfully get all student", 
        data : result
      })
 })

const getSingleStudentController   =catchAsync(async (req , res  ) =>{
     const id = req.params.studentId;
    const result = await StudentServices.getSingleStudent(id);
    sendRespons(res, {
      statusCode : StatusCodes.OK, 
      success : true, 
      message : "successfully get all student", 
      data : result
    })
 })

const deleteStudent  = catchAsync(async ( req  , res  ) =>{
     const id = req.params.studentId;
    const result = await StudentServices.deleteStudent(id);
    sendRespons(res, {
      statusCode : StatusCodes.OK, 
      success : true, 
      message : "successfully get all student", 
      data : result
    })
 })
export const StudentController = {
    
    getAllStudents, 
    getSingleStudentController, 
    deleteStudent
}