 
import { model, Schema } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  StudentMethod,
  StudentModels,
  TStudent,
  UserName,
} from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'first name required'],
    maxlength : [20, 'first name 20 er besi dis na '], 
    trim : true, 
    validate: {
      validator : function(value:string){
        const firstNameValue = value.charAt(0).toUpperCase() + value.slice(1)
        return firstNameValue === value
      },
      message : "{VALUE} is can't capitalize formate"
    }
  },
  middleName: {
    type: String,
    trim : true
  },
  lastName: {
    type: String,
    required: [true, 'last name required'],
    trim : true, 
    validate : {
      validator : (value:string)=>validator.isAlpha(value), 
      message : "{VALUE} Is not Alphameric"
    }
  },
});
const GuardianSchema = new Schema<Guardian>({
  fatherContactNumber: {
    type: String,
    require: [true, 'father contact required'],
   },
  fatherName: {
    type: String,
    required: [true, 'father name required'],
    trim : true
  },
  fatherOccepation: {
    type: String,
  },
  motherName: {
    type: String,
    required: [true, 'mother name required'],
    trim : true
  },
  motherContactNumber: {
    type: String,
    required: [true, 'mother contact requried'],
  },
  motherOccepation: {
    type: String,
  },
});
const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'local Guardian required'],
    trim : true
  },
  contact: {
    type: String,
    required: [true, 'contact required'],
  },
 
  address: {
    type: String,
  },
});

const StudentSchema = new Schema<TStudent, StudentModels, StudentMethod>({
  id: {
    type: String,
    required: [true, 'id required '],
    unique : true, 
  
  },
  name: {
    type : userNameSchema, 
    required : [true, 'name filed required']
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
    },
    required: [true, 'gender must be required'],
  },
  dateOfBrith: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'email must be required'],
    trim : true, 
    validate : {
      validator : (email:string)=> validator.isEmail(email), 
      message : "{VALUE} is not a valid email"
    }
  },
  contactNumber: {
    type: String,
    required: [true, 'contact required'],
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'B+', 'AB+', 'A-', 'B-', 'AB-', 'O+', 'O-'],
      message : "vai tumar ki matha thik ase ki rokter group dicco"
    },
    required : true,
  },
  presentAddresh: {
    type: String,
  },
  parmanentAddresh: {
    type: String,
  },
  guardian: {
    type : GuardianSchema, 
    required : [true, 'guardian required']
  },
  localGuardian: {
    type : LocalGuardianSchema , 
    required : [true, 'local guardian required']
  },
  profileImg: {
    type: String,
    trim : true
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inActive'],
      message : "{VALUE} is not a valid"
    },
    default : "active"
  },
});


StudentSchema.methods.isExitsUser = async function(id:string){
  const exitesUser = await StudentModel.findOne({id:id});
  return exitesUser
}
export const StudentModel = model<TStudent, StudentModels>('student', StudentSchema);
