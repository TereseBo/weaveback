const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

function createCookie(res, result) {
    const cookieUser={
        id:result._id,
        username:result.username
    }

  const authToken = jwt.sign(cookieUser, secret, {
    expiresIn: 36800,
  });

  res.cookie("authToken", authToken, {
    maxAge: 1800000,
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
};

module.exports=createCookie