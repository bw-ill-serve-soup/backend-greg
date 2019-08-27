const express = require("express");
const router = express.Router();
const kitchenHelper = require("./kitchenHelpers");
const db = require("../data/db-Config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Base URL - /kitchen

router.get("/", (req, res) => {
  let body = req.body;
  let header = req.header;
  userID = req.userInfo.subject;
  res.status(200).json({ Hello: "from the kitchen", body, header, userID });
});

router.get("/inventory", (req, res) => {
  let id = req.userInfo.subject;
  kitchenHelper
  .getUserInventory(id)
  .then(userInventory => {
    res.status(200).json(userInventory);
  })
  .catch(error => {
    res.status(500).json({ Error: "Something's gone horribly wrong" });
  });
});

// addUserID takes user_id from decoded token, adds to user req body
// reqBodyCheck ensures all required fields are present
router.post(
  "/inventory",
  kitchenHelper.addUserID,
  kitchenHelper.reqBodyCheckPost,
  (req, res) => {
    const newInven = req.body;
    kitchenHelper
      .addNewInventoryItem(newInven)
      .then(newItem => {
        res.status(200).json(newItem);
      })
      .catch(error => {
        res.status(500).json({ Error: "Something's gone horribly wrong" });
      });
  }
);

// addUserID adds proper user ID
// reqBodyCheck ensures all required fields are present
router.put(
  "/inventory",
  kitchenHelper.addUserID,
  kitchenHelper.reqBodyCheckPut,
  (req, res) => {
    const editItem = req.body;
    // db call to inventory checks if user has authorization to delete the item
    db("inventory")
      .where({ id: editItem.id })
      .first()
      .then(item => {
        // checks if the user_id added by kitchenHelper.addUserID is the same as the userID
        // in the database on the item to be deleted
        if (editItem.user_id != item.user_id) {
          // Forbids users from editing inventory items they don't own
          res.status(401).json({
            Error: "You are not authorized to edit another user's inventory"
          });
        } else {
          kitchenHelper.editInventory(editItem).then(editedItem => {
            res.status(200).json(editedItem);
          });
        }
      })
      .catch(error => {
        res.status(500).json({ Error: "Something's gone horribly wrong" });
      });
  }
);

router.delete("/inventory", kitchenHelper.addUserID, (req, res) => {
  const deleted = req.body;
  db("inventory")
    .where({ id: deleted.id })
    .first()
    .then(item => {
      if (deleted.user_id != item.user_id) {
        res.status(401).json({
          Error: "You are not authorized to delete another user's inventory"
        });
      } else {
        kitchenHelper.deleteItem(deleted).then(delItem => {
          res.status(200).json(delItem);
        });
      }
    })
    .catch(error => {
      res.status(500).json({ Error: "Something's gone horribly wrong" });
    });
});

module.exports = router;
