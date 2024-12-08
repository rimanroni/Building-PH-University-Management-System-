import { Response } from "express";

const sendRespons = <T>(res:Response, data:{
    statusCode : number,
    success : boolean,
    message? : string, 
    data : T
})=>{
    res.status(data?.statusCode).json({
        success : data.success, 
        message : data.message, 
        data : data.data
    })
}

export default sendRespons