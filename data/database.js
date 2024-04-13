import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://H4r5h-10:9TlzDXKb9cAaRUcS@cluster0.wmv3dto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    // mongoose.connect("mongodb://localhost:27017",{
    dbName: "authentication_app"
}).then(console.log("Database Connected"));
}

export default connectDB;