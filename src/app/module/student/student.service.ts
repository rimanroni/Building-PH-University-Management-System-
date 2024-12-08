 
import { StudentModel } from "./student.model";

 
const getAllStudents = async()=>{
    const result = await StudentModel.find();
    return result
};

const getSingleStudent = async (id:string) =>{
    const result = await StudentModel.findById(id);
    return result
};

const deleteStudent = async (id:string) =>{
    const result = await StudentModel.findByIdAndUpdate(id, {  isDeleted :true}, {new:true});
    return result
}


export const StudentServices = {
  
    getAllStudents , 
    getSingleStudent , 
    deleteStudent
}