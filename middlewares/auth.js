import jwt from "jsonwebtoken";
import User from '../model/User.js'

export const isAuthenticated = async  (req,res,next)=>{
    const {token} = req.cookies;
    if(!token)
    {
        return res.status(404).json({
            success: false,
            message: "Login First"
        })
    }
    const decoded = jwt.verify(token,process.env.APP_SECRET_KEY);
    req.user = await User.findById(decoded._id);
    next();
}