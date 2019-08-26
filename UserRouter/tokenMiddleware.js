const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "test";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ Error: "Bad token" });
      } else {
        // Decode token here and pass along info for front end to hook into userID
        // Adding userInfo to every request - in addition to req.body, there's now req.userInfo
        //  Can grab it from anywhere to ID the user and ensure only appropriate info is displayed
        req.userInfo = decodedToken
        next();
      }
    });
  } else {
    res.status(400).json({ Error: "No Token" });
  }
};
