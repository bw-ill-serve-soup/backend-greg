const express = require("express");
const router = express.Router();
const kitchenHelper = require("./kitchenHelpers");
const db = require("../data/db-Config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Base ULR - /kitchen

router.get("/", (req, res) => {
  let body = req.body;
  let header = req.header;
  userID = req.userInfo.subject;
  res.status(200).json({ Hello: "from the kitchen", body, header, userID });
});

router.get("/inventory", (req, res) => {
  //console.log(req.userInfo.subject);
  let id = req.userInfo.subject;
  kitchenHelper.getUserInventory(id).then(userInventory => {
    res.status(200).json(userInventory);
  });
});

// addUserID takes user_id from decoded token, adds to user req body
// reqBodyCheck ensures all required fields are present
router.post("/inventory", kitchenHelper.addUserID, kitchenHelper.reqBodyCheckPost, (req, res) => {
  const newInven = req.body;
  kitchenHelper
    .addNewInventoryItem(newInven)
    .then(newItem => {
      res.status(200).json(newItem);
    })
    .catch(error => {
      res.status(500).json({ Error: "Something's gone horribly wrong" });
    });
});

// addUserID adds proper user ID
// reqBodyCheck ensures all required fields are present
router.put("/inventory", kitchenHelper.addUserID, kitchenHelper.reqBodyCheckPut, (req, res) => {
  const editItem = req.body;
  console.log(editItem);
  kitchenHelper
    .editInventory(editItem)
    .then(editedItem => {
      res.status(200).json(editedItem);
    })
    .catch(error => {
      res.status(500).json({ Error: "Something's gone horribly wrong" });
    });
});

// Works, but can delete any users inventory item if the item id is valid.
// With more time, I'd add a database call, make sure the user_id on the body matches
// the user_id for the item attempting to be deleted.
//  But front end needs these endpoints today, such is the nature of build week

router.delete("/inventory", kitchenHelper.addUserID, (req, res) => {
  //console.log(req.body);
  const deleted = req.body;
  kitchenHelper.deleteItem(deleted).then(delItem => {
    res.status(200).json(delItem);
  });
});

module.exports = router;
