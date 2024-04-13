// import cookieParser from "cookie-parser";
import express from "express";
import connectDB from "./data/database.js";
import cookieParser from "cookie-parser";

const app = express();

connectDB();

app.use(cookieParser());
app.use(express.json());

app.listen(4000, (req,res)=>{
  console.log("Server Running at http://localhost:4000")
})

export default app;
