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

router.get("/inventory", (req, res)=>{
    let id = req.userInfo.subject
    console.log(id)
    kitchenHelper.getUserInventory(id).then(test=>{
        res.status(200).json(test)
    })
})

router.post("/ingredient", (req, res)=>{

})

// Basic idea - user already included via decoded token, just need ingredients and quantity to be added,
// Should make ingredients and quantity non-Nullable later?
//  req.body will include: - id from token, ingredients, quantity 
//- just add to table and include user id as FK - boom, you're done

// GET requests will have to be to quantity - it's the only table that tracks relationships between users and ingredients.
// GET to quantity, WHERE ingredient_id = ingredient, same for users

//  POST, I dunno
// user is known, ingredient and weight added is irrelevant - whatever you decide for one goes for the other
// post to quantity - need to include user_id FK, inventory FK, weight FK
// PROBLEM - how to handle inventory?  Should it have a user_id FK, or be its own little world?  How I handle inventory is how I'll handle weights
//  REMEMBER - quantity is the crux of the whole thing, all GET requests will revolve around it and JOINs

module.exports = router;
