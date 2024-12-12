/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import  { NextFunction, Request,   Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler   = (err:any , req:Request, res:Response, next:NextFunction)=>{

    const statusCode = 500;
    const message = "something wrong";
    return res.status(statusCode).json({
      success : false, 
      message :  message, 
      error : err
    })

}