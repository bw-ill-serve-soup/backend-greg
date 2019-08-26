const db = require("../data/db-Config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  getAll,
  addNewUser,
  findUser,
  hashPassword,
  generateToken
};

function getAll() {
  return db("users");
}

function addNewUser(newUser) {
  return db("users").insert(newUser);
}

function findUser(username) {
  return db("users").where({ username });
}

function hashPassword(req, res, next) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;
  next();
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    name: user.username
  };
  const secret = process.env.SECRET || "test";
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}
