
import {app} from './app.js'
import connectDB from "./data/database.js";

connectDB();

app.listen(4000, (req,res)=>{
    console.log("Server Running")
  })

