import { NextFunction, Request, Response } from "express";
import {   UserServices } from "./user.service";
import sendRespons from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createStudent = async(req:Request, res:Response, next:NextFunction) =>{ 
    try{
        const {password,  student} = req.body;
       
        const result = await UserServices.createStudentInDB(password,student)
        // res.status(200).json({
        //   status : true,
        //   message : "successfully student create", 
        //   result
        // })
        sendRespons(res, {
          statusCode : StatusCodes.OK,
          success : true, 
          message : "successfully student create", 
          data : result
        })
    }catch(error){
      next(error)
    }
};
  
export const UserController = {
    createStudent 
}