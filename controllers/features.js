import jwt from "jsonwebtoken";

const sendCookie = (user,res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET_KEY);
  res.status(statusCode).cookie("token", token, {
      httpOnly: true,
      maxAge: 2*24*60*60*1000,
      sameSite: process.env.NODE_ENV==="Development"?"lax":"none",
    })
    .json({
      success: true,
      message,
    });
};
export default sendCookie;