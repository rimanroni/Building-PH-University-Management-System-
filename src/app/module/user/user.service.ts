import config from "../../config";
import {   TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";

const createStudentInDB = async(password:string,  student:TStudent)=>{
    const userData : Partial<Tuser> = {} // user objects 
    userData.password = password || config.default_password as string
    userData.role = "student"
     // set menaullay generate id 
     userData.id = '200333000'
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