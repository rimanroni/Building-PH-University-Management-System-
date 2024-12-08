import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
 

const getAllStudents = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const result = await StudentServices.getAllStudents();
        res.status(200).json({
            success : true, 
            message : "successfully all data get", 
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
        res.status(200).json({
            success : true,
            message : "successfully response", 
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
    res.status(200).json({
        success : true,
        message : "successfully response", 
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