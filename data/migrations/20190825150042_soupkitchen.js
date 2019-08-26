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
      tbl.string("inventory", 128);
    })
    .createTable("weights", tbl => {
      tbl.increments();
      tbl.string("weightUnit", 128);
    })
    .createTable("quantity", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("inventory_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("inventory")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      tbl.integer("quantity", 128);
      tbl
        .integer("weight_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("weights")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("weights")
    .dropTableIfExists("inventory")
    .dropTableIfExists("users")
};