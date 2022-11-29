import {z} from 'zod';

export const addBooksSchema = z.object({
    body: z.object({
      name: z
        .string({ required_error: "name is required !" })
        .min(3, "name is more than 2 Chars"),
      genre: z
        .string({ required_error: "genre is required !" })
    }),
  });