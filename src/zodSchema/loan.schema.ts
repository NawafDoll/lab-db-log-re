import { z } from "zod";

export const addLoanSchema = z.object({
body: z.object({
    book_id: z.string({ required_error: "book id is required !" }),
    user_id: z.string({ required_error: "user id is required !" }),
  }),
});

export const paramSchema = z.object({
    params: z.object({
      userid: z.string(),
    }),
  });

  export type paramsType = z.infer<typeof paramSchema>['params'];
