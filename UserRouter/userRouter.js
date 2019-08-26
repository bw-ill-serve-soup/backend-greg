const express = require("express");
const router = express.Router();
const userFunc = require("./userRouterFunctions");
const db = require("../data/db-Config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Base URL - /api

router.get("/", (req, res) => {
  userFunc.getAll().then(users => {
    res.status(200).json(users);
  });
});

router.post("/register", userFunc.hashPassword, (req, res) => {
  const newUser = req.body;
  userFunc
    .addNewUser(newUser)
    .then(newU => {
      res.status(200).json(newU);
    })
    .catch(error => {
      res.status(500).json({ Error: "Did not add user" });
    });
});

router.post("/find/:id", (req, res) => {
  const id = req.params.id;
  userFunc.findUser(id).then(user => {
    res.status(200).json(user);
  });
});

router.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  db("users")
    .where({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = userFunc.generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ Error: "password fail" });
      }
    })
    .catch(error => {
      res.status(500).json({ Error: "Didn't get past findUser" });
    });
});

module.exports = router;
