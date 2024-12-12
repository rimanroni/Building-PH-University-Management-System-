 
import express, {   Request, Response } from 'express'
import cors from 'cors'
 
 import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFund } from './app/middlewares/notFound';
import router from './app/routes';
import { AcademicRouter } from './app/module/academic-semester/academic.route';
  
const app = express();

 
// middleware 
app.use(express.json());
app.use(cors());

// router 

app.use('/api/v1' , router);
 
 

app.get('/', (_req:Request, res:Response) => {
  res.status(200).json({
    status : true, 
    message : "i love coding (●'◡'●)", 
    data : "successfully server respons 😉😎"
  })
})

// create a global error handle 

app.use(globalErrorHandler )  //

// not found middlware 
app.use(notFund  )


export default app;
