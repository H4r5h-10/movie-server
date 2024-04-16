import jwt from "jsonwebtoken";

const sendCookie = (user,res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, "HUHUHUHUHUHHUH");
  res.status(statusCode).cookie("token", token, {
      maxAge: 2*24*60*60*1000,
      sameSite: "none",
      secure:  true,
    })
    .json({
      success: true,
      message,
    });
};
export default sendCookie;