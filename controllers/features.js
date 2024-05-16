import jwt from "jsonwebtoken";

export const sendCookie = (user,res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id },process.env.APP_SECRET_KEY);

  res.status(statusCode).cookie("token", token, {
      httpOnly: true,
      maxAge: 2*24*60*60*1000,
      SameSite: 'none',
      secure: true
    })
    .json({
      success: true,
      message,
    });
};
export default sendCookie;