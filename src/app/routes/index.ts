import { Router } from "express";
import { StudentRouter } from "../module/student/student.route";
import { userRouter } from "../module/user/user.router"; 
const router = Router()
const moduleRouter = [
    {
        path:"/students", 
        route : StudentRouter
    }, 
    {
        path:"/user", 
        route : userRouter
    }
]
moduleRouter.forEach((route)=>router.use(route.path, route.route))

export default  router  
