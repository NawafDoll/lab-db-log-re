import express from "express";
import { addNewBook, getAllBooks } from "../controller/books.controllers";
import validate from "../middelware/validate";
import { addBooksSchema } from "../zodSchema/books.schema";

const bookRouter = express.Router();

bookRouter.get(`/`, getAllBooks);
bookRouter.post(`/`, validate(addBooksSchema), addNewBook);

export default bookRouter;