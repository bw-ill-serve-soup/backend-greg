
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: "meat"},
        {ingredient: "potatoes"},
        {ingredient: "cauliflower"},
        {ingredient: "broccoli"},
        {ingredient: "cauliflower"},
      ]);
    });
};
