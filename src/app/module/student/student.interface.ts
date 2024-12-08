import { Model, Types } from "mongoose";

export type Guardian =  {
    fatherName: string;
  fatherContactNumber: string;
  fatherOccepation?: string;
  motherName: string;
  motherContactNumber: string;
  motherOccepation?: string;
  }
export type UserName = {
    firstName: string;
  middleName?: string;
  lastName: string;
}
export type LocalGuardian = {
    name: string;
  contact: string;
  address?: string;
  emergencyNumber: string;
}
export type TStudent = {
    id: string;
    
    user : Types.ObjectId,
    name: UserName;
    gender: 'male' | 'female';
    contactNumber: string;
    email: string;
    emergencyContactNumber: string;
    dateOfBrith: string;
    bloodGroup: 'A+' | 'B+' | 'AB+' | 'A-' | 'B-' | 'AB-' | 'O+' | 'O-';
    presentAddresh?: string;
    parmanentAddresh?: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
   
    isDeleted : boolean
  
}

 



// -------------for static method  --------------
//  export  interface StudentModels extends Model<TStudent>{
//     isStudentExites(id:string):Promise<TStudent | null>
//  }


// -------------for creating inostent --------------
// creating a custom inostent method 
// export type StudentMethod = {
//     isExitsUser(id:string) :  Promise<TStudent | null>
// }

// 

// export type StudentModels = Model<TStudent,Record<string, never>, StudentMethod>