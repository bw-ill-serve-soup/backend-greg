
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {inventory: "meat"},
        {inventory: "potatoes"},
        {inventory: "cauliflower"},
        {inventory: "broccoli"},
        {inventory: "cauliflower"},
      ]);
    });
};
