# ReadMe

Backend has two tables, one for users, one for inventory.  User table 
stores username and password.  Inventory table stores inventory item, 
quantity of that item, weight/amount of that item, and the user
it belongs to.

Seeded usernames/passwords: 

- username: "admin", password: "admin"

- username: "Rex", password: "abc123"

- username: "Susi", password: "abc123"

- username: "Calvin", password: "abc123"

- username: "Hobbes", password: "abc123"


Registration endpoint: 
https://soupkitchen-buildweek.herokuapp.com/api/register

Login endpoint: 
https://soupkitchen-buildweek.herokuapp.com/api/login

- Registration inserts user into the database
- Login sends back a token to the user

User Inventory GET, POST, PUT, and DELETE requests should be directed at: 
https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory


- req.body format - eg 

	{ "quantity": 5,

	"weightUnit": "12",

	"inventoryItem": "Tonka" }



- Only delete requires an item ID in the URL - 
ie: https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory/1

- PUT takes the item ID from the req.body, eg - 
- { 
    id: 2,
    
    quantity: 5,

	weightUnit: 12,

	inventoryItem: "Tonka" 
}

All CRUD operations require a token in the header.
POST and PUT will check to make sure the req.body has the required, non-Nullable fields, will return an error message if they don't

PUT and DELETE have an internal check to make sure that the user logged in/decodedToken userId matches the userId in the database of the item they're attempting to edit or delete, so users can't delete each others' inventory items

