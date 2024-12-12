import { z } from "zod";
import { Months, SemesterCode, SemesterName } from "./academic.constant";

const createAcademicValidation = z.object({
    body: z.object({
        name: z.enum([...SemesterName] as [string, ...string[]], {
          required_error: 'name must be required',
        }),
        code: z.enum([...SemesterCode] as [string, ...string[]], {
          required_error: 'code required',
        }),
        endMonth: z.enum([...Months] as [string, ...string[]]),
        startMonth: z.enum([...Months] as [string, ...string[]]),
        year: z.string({
          required_error: 'year field required',
        }),
      }),
});

const updateAcademicValidation = z.object({
  body: z.object({
      name: z.enum([...SemesterName] as [string, ...string[]], {
        required_error: 'name must be required',
      }).optional(),
      code: z.enum([...SemesterCode] as [string, ...string[]], {
        required_error: 'code required',
      }).optional(),
      endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
      startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
      year: z.string({
        required_error: 'year field required',
      }).optional(),
    }),
});

export const academicValidation = {
    createAcademicValidation, 
    updateAcademicValidation
}