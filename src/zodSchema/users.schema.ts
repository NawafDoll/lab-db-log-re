import {z} from 'zod';

export const addUsersSchema = z.object({
    body:z.object({
        userName: z
      .string({ required_error: "username is required !" })
      .min(3, "username must be more than 2 Chars"),
        password: z
      .string({ required_error: "password is required !" })
      .min(8, "password must be more than 8 Chars"),
    })
})