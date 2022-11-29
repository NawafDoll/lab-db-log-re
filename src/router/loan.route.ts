import express from "express";
import {
  addNewLoan,
  getAllLoans,
  lendBooks,
} from "../controller/loan.controllers";
import validate from "../middelware/validate";
import { addLoanSchema } from "../zodSchema/loan.schema";

const loanRouter = express.Router();

loanRouter.get(`/`, getAllLoans);
loanRouter.get(`/user/loan/:userid`, lendBooks);
loanRouter.post(`/`, validate(addLoanSchema), addNewLoan);

export default loanRouter;