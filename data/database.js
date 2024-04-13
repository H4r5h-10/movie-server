import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017",{
    dbName: "authentication_app"
}).then(console.log("Database Connected"));
}

export default connectDB;