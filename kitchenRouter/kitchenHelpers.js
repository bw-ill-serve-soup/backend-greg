const db = require("../data/db-Config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = {
    getAll, getUserInventory
}

function getAll () {
    return db("inventory")
}

function getUserInventory (id) {
    return db("inventory").where({user_id: id})
}

function addNewIngredient () {
    return db("ingredients").insert
}

// {
//     userid: Gandalf,
//     ingredients: meat, potatoties, clovers
//         user_id = ...
//     quantity: 5
//     unit of measurement: lbs
// }