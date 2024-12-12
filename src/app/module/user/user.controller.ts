 import {   UserServices } from "./user.service";
import sendRespons from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
 

const createStudent  = catchAsync(async(req, res) =>{ 
       const {password,  student} = req.body;
       const result = await UserServices.createStudentInDB(password,student)
       sendRespons(res, {
        statusCode : StatusCodes.OK,
        success : true, 
        message : "successfully student create", 
        data : result
      })
})
  
export const UserController = {
    createStudent 
}