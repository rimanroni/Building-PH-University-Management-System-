import { catchAsync } from "../../utils/catchAsync";
import sendRespons from "../../utils/sendResponse";
import { AcademicService } from "./academic.service";

const createAcademic = catchAsync (async(req, res)=>{
 
const result = await AcademicService.createAcademicSemesterIntoDB(req.body) 
      sendRespons(res, {
         statusCode : 200, 
         message : "successfully create academic semester", 
         success : true , 
         data : result
      })
});

const getAllSemester = catchAsync( async (req, res) => {
    const result = await AcademicService.getAllSemester();
    sendRespons(res, {
        statusCode : 200, 
        success : true, 
        data : result, 
        message : "successfully get all semester"
    })
});

const getSingleSemester = catchAsync(async(req, res)=>{
  const id = req.params.SemesterId;
  const result = await AcademicService.getSingleSemester(id);
  sendRespons(res, {
    statusCode : 200, 
    message : "successfully single semester get", 
    success : true, 
    data : result
  })
    
});

const updateSemester = catchAsync(async(req, res)=>{
    const id = req.params.SemesterId;
    const data = req.body;
    console.log(data)
    const result = await AcademicService.updateSemester(id, data);
    sendRespons(res, {
        statusCode: 200, 
        success : true, 
        message : 'successfully update semester data', 
        data : result
    })
})
export const academicController = {
    createAcademic, 
    getAllSemester, 
    getSingleSemester, 
    updateSemester
}