import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentInDB = async(student:TStudent)=>{
       
    // built in static methods
    // const result = await StudentModel.create(student);
       const studentInostent = new  StudentModel(student); // create a inostent 
       if(await studentInostent.isExitsUser(student.id)){
        throw new Error("user exites ar hobe na onno dia try kr")
       }
       const result = await studentInostent.save() // build in inostent method
       return  result

};
const getAllStudents = async()=>{
    const result = await StudentModel.find();
    return result
};

const getSingleStudent = async (id:string) =>{
    const result = await StudentModel.findById(id);
    return result
}


export const StudentServices = {
    createStudentInDB, 
    getAllStudents , 
    getSingleStudent 
}