
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weights')
    .then(function () {
      // Inserts seed entries
      return knex('weights').insert([
        {weightUnit: "oz"},
        {weightUnit: "lbs"},
        {weightUnit: "pinch"},
        {weightUnit: "pallet"},
      ]);
    });
};
