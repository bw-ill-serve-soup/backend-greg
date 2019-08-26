const express = require("express");
const router = express.Router();
const kitchenHelper = require("./kitchenHelpers");
const db = require("../data/db-Config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Base ULR - /kitchen

router.get("/", (req, res)=>{
    let body = req.body
    let header = req.header
    userID = req.userInfo.subject
    res.status(200).json({Hello: "from the kitchen", body, header, userID})
})

router.get("/test", (req, res)=>{
    let id = req.userInfo
    kitchenHelper.getUserInventory(id).then(test=>{
        res.status(200).json(test)
    })
})

module.exports = router;
