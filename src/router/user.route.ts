import express from "express";
import { getUsers, postNewUsers } from "../controller/users.controller";
import validate from "../middelware/validate";
import { addUsersSchema } from "../zodSchema/users.schema";

const userRoute = express.Router();


userRoute.post(`/`, validate( addUsersSchema), postNewUsers);
userRoute.get(`/`, getUsers);


export default userRoute;