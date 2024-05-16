import jwt from "jsonwebtoken";

export const sendCookie = (user,res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id },process.env.APP_SECRET_KEY);

  res.status(statusCode).cookie("token", token, {
    domain: "moviemeter-sigma.vercel.app",
      maxAge: 2*24*60*60*1000,
      sameSite: 'none',
      secure: true
    })
    .json({
      success: true,
      message,
    });
};
export default sendCookie;
