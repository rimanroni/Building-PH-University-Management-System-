import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentRouter } from './app/module/student/student.route';
const app = express();

 
// middleware 
app.use(express.json());
app.use(cors());

// router 

app.use('/api/v1/students', StudentRouter)

app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    status : true, 
    message : "i love coding (●'◡'●)", 
    data : "successfully server respons 😉😎"
  })
})

export default app;
