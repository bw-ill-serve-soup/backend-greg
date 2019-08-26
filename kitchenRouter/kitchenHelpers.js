const db = require("../data/db-Config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAll,
  getUserInventory,
  addNewInventoryItem,
  addUserID,
  editInventory,
  deleteItem,
  reqBodyCheckPut,
  reqBodyCheckPost
};

function getAll() {
  return db("inventory");
}

function getUserInventory(id) {
  return db("inventory").where({ user_id: id });
}

function addUserID(req, res, next) {
  req.body.user_id = req.userInfo.subject;
  next();
}

// user_id handled by middleware, addUserID
function addNewInventoryItem(newInventory) {
  return db("inventory").insert(newInventory);
}

function editInventory(item) {
  return db("inventory")
    .where({ id: item.id })
    .update(item);
}

function deleteItem(deleted) {
  return db("inventory")
    .where({ id: deleted.id })
    .del();
}

function reqBodyCheckPut(req, res, next) {
  if (
    req.body.quantity &&
    req.body.weightUnit &&
    req.body.inventoryItem &&
    req.body.user_id &&
    req.body.id
  ) {
    next();
  } else {
    res.status(400).json({ Error: "Your request is missing a required field" });
  }
}

function reqBodyCheckPost(req, res, next) {
  if (
    req.body.quantity &&
    req.body.weightUnit &&
    req.body.inventoryItem &&
    req.body.user_id
  ) {
    next();
  } else {
    res.status(400).json({ Error: "Your request is missing a required field" });
  }
}
