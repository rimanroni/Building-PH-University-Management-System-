import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendRespons from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
 

const getAllStudents = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const result = await StudentServices.getAllStudents();
        sendRespons(res, {
          statusCode : StatusCodes.OK, 
          success : true, 
          message : "successfully get all student", 
          data : result
        })
    }catch(error){
      next(error)
    }
};

const getSingleStudentController =async (req:Request, res:Response , next:NextFunction) =>{
      try{
        const id = req.params.studentId;
        const result = await StudentServices.getSingleStudent(id);
        sendRespons(res, {
          statusCode : StatusCodes.OK, 
          success : true, 
          message : "successfully get all student", 
          data : result
        })
      }catch(error){
         next(error)
      }

};
const deleteStudent = async ( req:Request , res : Response, next:NextFunction) =>{
  try{
    const id = req.params.studentId;
    const result = await StudentServices.deleteStudent(id);
    sendRespons(res, {
      statusCode : StatusCodes.OK, 
      success : true, 
      message : "successfully get all student", 
      data : result
    })
  }catch(error){
   next(error)
  }
}
export const StudentController = {
    
    getAllStudents, 
    getSingleStudentController, 
    deleteStudent
}