// Bring in JSONWebToken
const jwt = require("jsonwebtoken");
// Dotenv to get secret
require("dotenv").config();

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET;
  if (authorization) {
    jwt.verify(authorization, secret, function (error, decodedToken) {
      if (error) {
        res.status(401).json({ Message: "invalid token given" });
      } else {
        req.token = decodedToken; // so anything downstream can access the data in the token
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again!" });
  }
};
