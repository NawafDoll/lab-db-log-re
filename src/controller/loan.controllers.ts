import { Loan } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { paramsType } from "../zodSchema/loan.schema";

// get allLaons
export const getAllLoans = async (
    req:Request,
    res:Response,
    next:NextFunction)=>{
        try{
        const allLoans = await prisma.loan.findMany();
        return res.status(200).json(allLoans)
        }catch(err){
            console.log(err)
            return res.status(500).json({message:"Server Error"})
        }
    }


export const addNewLoan = async (req: Request, res: Response) => {
  try {
    const newLoan = req.body as Loan;
    await prisma.loan.create({ data: newLoan });

    return res.status(201).json({
      message: "laon added",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};


export const lendBooks = async (req: Request, res: Response) => {
  try {
    const {userid} = req.params as paramsType;

    const getUserBooks = await prisma.users.findUnique({
      where: {id:userid},
      select: {
        userName: true,
        loan: true,
      },
    });

    return res.status(200).json(getUserBooks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};