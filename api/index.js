// import cookieParser from "cookie-parser";
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import userRouter from '../routes/user.js'
import movieRouter from '../routes/movies.js'
import connectDB from "../data/database.js";
// import { config } from "dotenv";

export const app = express();

connectDB();

app.listen(4000, (req,res)=>{
    console.log("Server Running")
  })
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      return res.status(200).end();
  }

  next();
});
app.use(
  cors({
    origin: ["http://localhost:5173","https://moviemeter-sigma.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/users",userRouter);
app.use("/movies",movieRouter);


app.get('/', (req,res)=>{
  res.send("<h1>Nice Working</h1>")
});


export default app;
