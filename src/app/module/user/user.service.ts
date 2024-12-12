import config from "../../config";
import { TAcademic } from "../academic-semester/academic.interface";
import { academicModel } from "../academic-semester/academic.model";
import {   TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentInDB = async(password:string,  student:TStudent)=>{
    const userData : Partial<Tuser> = {} // user objects 
    userData.password = password || config.default_password as string
    userData.role = "student"
    
  
     // find academic semester info 
    const admissionSemester = await academicModel.findById(student.admissionSemester) 
    if (!admissionSemester) {
        throw new Error("Admission semester not found!");
      }
     // set menaullay generate id 
     userData.id = await generateStudentId(admissionSemester)
    


     // create a user 
     const newUser = await userModel.create(userData);
    //  create a student
    if(Object.keys(newUser).length ){
        // set id , _id  as user 
        student.id = newUser.id;
        student.user = newUser._id;
        const newStudent = await StudentModel.create(student);
        return newStudent

    }
 };

export const UserServices = {
    createStudentInDB
}