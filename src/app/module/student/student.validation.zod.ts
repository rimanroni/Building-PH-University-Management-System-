import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name required' })
    .max(20, { message: 'First name cannot exceed 20 characters' })
    .refine(
      (value) => /^[A-Z]/.test(value),
      { message: 'First name must start with a capital letter' }
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name required' })
    .refine(
      (value) => /^[a-zA-Z]+$/.test(value),
      { message: 'Last name must be alphabetic' }
    ),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name required' }),
  fatherContactNumber: z.string().min(1, { message: 'Father contact required' }),
  fatherOccepation: z.string().optional(),
  motherName: z.string().min(1, { message: 'Mother name required' }),
  motherContactNumber: z
    .string()
    .min(1, { message: 'Mother contact required' }),
  motherOccepation: z.string().optional(),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name required' }),
  contact: z.string().min(1, { message: 'Local guardian contact required' }),
  address: z.string().optional(),
  emergencyNumber: z
    .string()
    .min(1, { message: 'Emergency contact number required' }),
});

const createStudentSchemaZod = z.object({
    body : z.object({
    student : z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female'], {
        message: 'Gender must be male or female',
      }),
      contactNumber: z.string().min(1, { message: 'Contact number required' }),
      email: z.string().email({ message: 'Invalid email address' }),
      emergencyContactNumber: z
        .string()
        .min(1, { message: 'Emergency contact required' }),
      dateOfBrith: z.string().optional(),
      bloodGroup: z.enum(
        ['A+', 'B+', 'AB+', 'A-', 'B-', 'AB-', 'O+', 'O-'],
        { message: 'Invalid blood group' }
      ),
      presentAddresh: z.string().optional(),
      parmanentAddresh: z.string().optional(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
      admissionSemester : z.string()
    })
    
    
    })
})

export const  studentValidation ={
  createStudentSchemaZod
};
