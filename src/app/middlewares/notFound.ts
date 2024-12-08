/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const notFund = (req:Request, res:Response, next:NextFunction) =>{
    return res.status(StatusCodes.NOT_FOUND).json({
        success : false, 
        message : 'api not found ', 
        error : ""
       
    })

}