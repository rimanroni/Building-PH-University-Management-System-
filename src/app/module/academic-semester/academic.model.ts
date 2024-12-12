import { model, Schema } from 'mongoose';
import { TAcademic } from './academic.interface';
import { Months, SemesterCode, SemesterName } from './academic.constant';

const academicSchema = new Schema<TAcademic>({
  
  name: {
    type: String,
    enum: {
      values: SemesterName,
    },
    required : [true, 'name must be required']
  },
  code: {
    type: String,
    enum : {
        values : SemesterCode
    }, 
    required : [true, 'code required ']
  },
  endMonth: {
    type: String,
    enum: {
      values:  Months
    }, 
    required : [true, 'end month must be required']
  },
  startMonth : {
    type : String , 
    enum : {
        values: Months
    }, 
    required : [true, 'start month required']
  }, 
  year : {
    type :String, 
    required : [true, 'year filed required']
  }

}, {
    timestamps : true
});

academicSchema.pre('save' , async function(next){
  const isSemesterExite = await academicModel.findOne({
    name : this.name, 
    year : this.year
  })
  if(isSemesterExite){
    throw new Error('semester is exite alreday')
  }
  next()
 })



export const  academicModel = model<TAcademic>('academic', academicSchema);

