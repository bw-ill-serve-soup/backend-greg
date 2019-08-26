// There's no good way to make this app scalable as it's designed.

//  As a mobile app, I'd make one table - inventory, and quantity, and have users download their own database to their phones, so everyone has a clean db
// As a website, I'd make 3 databases - one to track registered users, one for inventory that I'd control to ensure each item is unique, and a third
// to track quantity, which would use the FK of users and inventory FK, and would track which users have which inventory and how much

//  The build-week project requirements are written in the worst way, requiring me to split the difference in the worst way -
// users are unique and need to have their own inventory, but each has access to the entire inventory db without knowing it,
// so there's guaranteed to be duplication

// The only way to make this work is either a horrendously complicated 4-table scenario with users, inventory with user FK, weight table with user FK,
// and quantity table with user FK, inventory FK, and weight FK.  Each incoming req.body would have to be split off into several db calls to the 4 db's
//  Then reunited for a single res.body.  It's possible, and doable in a few days, but requires more time and coordination than is possible in a single week.
// The due date is in 4 days, and front end needs at least 3 days to coordinate amongst the 3 of them and test.  
// Basically - the backend needs to be done & work by the end of today
// The solution I've chosen in this case is two tables - one for users, one for inventory
//  It's sub-optimal, but it meets the project requirements, each entry will be unique with user FK's, and can be done in a week with a remote team

exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .unique()
        .notNullable();
      tbl.string("password", 128).notNullable();
    })
    .createTable("inventory", tbl => {
      tbl.increments();
      tbl.integer("quantity", 128).notNullable()
      tbl.string("weightUnit", 128);
      tbl.string("inventoryItem", 128).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
};

// exports.down = function(knex) {
//   return knex.schema
//     .dropTableIfExists("inventory")
//     .dropTableIfExists("users");
// };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("quantity")
  .dropTableIfExists("weights")
  .dropTableIfExists("inventory")
  .dropTableIfExists("users")
};
