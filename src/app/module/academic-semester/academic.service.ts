import { nameCodeMapper } from "./academic.constant";
import { TAcademic } from "./academic.interface";
import { academicModel } from "./academic.model";

const createAcademicSemesterIntoDB = async (payload:TAcademic) =>{
      if(nameCodeMapper[payload.name] !== payload.code) {
        throw new Error("semeser name and code don't match ")
     }
      const result = await academicModel.create(payload);
      return result 
};
const getAllSemester = async() =>{
  const result = await academicModel.find();
  return result
};
const getSingleSemester = async(id:string)=>{
  const result = await academicModel.findById(id);
  return result 
};
const updateSemester = async (id:string, payload:Partial<TAcademic>) =>{
     if(
      payload.name && 
      payload.code && 
      nameCodeMapper[payload.name] !== payload.code
    ){
      throw new Error("semester exite")
     }
    const result = await academicModel.findByIdAndUpdate({_id:id}, payload, {new:true});
    return result
}

export const AcademicService = {
    createAcademicSemesterIntoDB, 
    getAllSemester, 
    getSingleSemester,
    updateSemester
    
}