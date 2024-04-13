import jwt from "jsonwebtoken";

const sendCookie = (user,res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, "HUHUHUHUHUHHUH");
  res.status(statusCode).cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message,
    });
};
export default sendCookie;