// import cookieParser from "cookie-parser";
import express from "express";
import connectDB from "./data/database.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
// import { config } from "dotenv";

const app = express();

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(4000, (req,res)=>{
  console.log("Server Running")
})

export default app;
