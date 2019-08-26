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
    return db("inventory").where({id: id})

}