import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import config from "../../config";
import  bcrypt  from 'bcrypt';
const userSchema = new Schema<Tuser>({
    id : {
        type : String, 
        required: true, 
        unique : true 
    }, 
    password : {
        type : String, 
        
    }, 
    needsPasswordChange : {
        type : Boolean , 
        default : true
    }, 
    role : {
        type : String,
        enum : {
            values : ['admin', 'student', 'faculty']
        }
    }, 
    status : {
        type : String, 
        enum : {
            values : ['in-progress', 'blocked']
        },
        default : "in-progress"
    }, 
    isDeleted : {
        type : Boolean, 
        default : false
    }
},{
    timestamps : true
});

userSchema.pre('save' , async function(next){
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const student = this;
    student.password = await bcrypt.hash(student.password, Number(config.BycrptsaltRounds ));
  
    next()
  })
  
  userSchema.post('save', function(doc, next){
    doc.password='';
    next()
   })
export const userModel = model<Tuser>('user', userSchema)