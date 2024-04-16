import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName: "authentication_app"
}).then(console.log("Database Connected"));
}

export default connectDB;
