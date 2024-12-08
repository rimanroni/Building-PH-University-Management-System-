import { z } from "zod";

export  const userValidationSchema = z.object({
    password : z.string({
        invalid_type_error : "vai password string deo onno kisu nibo na "
    }).max(20, {message : 'password 20 er besi hobo na'}).optional()

})