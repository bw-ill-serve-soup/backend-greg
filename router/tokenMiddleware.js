const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "test";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ Error: "Bad token" });
      } else {
        req.userId = { id: decodedToken.id };
        next();
      }
    });
  } else {
    res.status(400).json({ Error: "No Token" });
  }
};
