import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentSchemaZod from "./student.validation.zod";

const createStudent = async(req:Request, res:Response) =>{
      try{
          const {student} = req.body;
        //   will call service function send data 


        // student validation with zod 
        const zodParseData = studentSchemaZod.parse(student)
          const result = await StudentServices.createStudentInDB(zodParseData);
          res.status(200).json({
            status : true,
            message : "successfully student create", 
            result
          })
      }catch(error:any){
        res.status(500).json({
            status:false,
            message : error.message || "something wrong", 
            error
        })
      }
};

const getAllStudents = async (req:Request, res:Response) =>{
    try{
        const result = await StudentServices.getAllStudents();
        res.status(200).json({
            success : true, 
            message : "successfully all data get", 
            data : result
        })
    }catch(error){
        res.status(500).json({
            success : false, 
            message : "server not responsed", 
            error
        })
    }
};

const getSingleStudentController =async (req:Request, res:Response) =>{
      try{
        const id = req.params.studentId;
        const result = await StudentServices.getSingleStudent(id);
        res.status(200).json({
            success : true,
            message : "successfully response", 
            data : result
        })
      }catch(error){
        res.status(500).json({
            success : false, 
            message : "someting wrong",
            error 
        })
      }

}
export const StudentController = {
    createStudent, 
    getAllStudents, 
    getSingleStudentController
}