import  express  from "express";
import {connectDB}  from "../src/config/db"
import bookRouter from "./router/book.route";
import loanRouter from "./router/loan.route";
import userRouter from "./router/user.route";

const app = express();
const port = 4022;
//midellwaire
app.use(express.json());

connectDB();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/loan", loanRouter);





app.listen(port,()=>{
    console.log(`Server running in port ${port}`);
    
});