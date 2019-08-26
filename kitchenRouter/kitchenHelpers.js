const db = require("../data/db-Config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = {
    getAll, getUserInventory, addNewInventoryItem, addUserID
}

function getAll () {
    return db("inventory")
}

function getUserInventory (id) {

    return db("inventory").where({user_id: id})
}

function addUserID (req, res, next) {
    req.body.user_id = req.userInfo.subject
    next()
}

// user_id handled by middleware, addUserID
function addNewInventoryItem (newInventory) {
   return db("inventory").insert(newInventory)
}

// {
//     userid: Gandalf,
//     ingredients: meat, potatoties, clovers
//         user_id = ...
//     quantity: 5
//     unit of measurement: lbs
// }