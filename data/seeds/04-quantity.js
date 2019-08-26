
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity')
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {user_id: 1, inventory_id: 1, quantity: 5, weight_id: 1},
        {user_id: 1, inventory_id: 2, quantity: 6, weight_id: 2},
        {user_id: 1, inventory_id: 2, quantity: 7, weight_id: 3},
        {user_id: 1, inventory_id: 3, quantity: 5, weight_id: 1},
        {user_id: 2, inventory_id: 4, quantity: 5, weight_id: 2},
        {user_id: 2, inventory_id: 3, quantity: 6, weight_id: 3},
        {user_id: 2, inventory_id: 2, quantity: 765, weight_id: 3},
        {user_id: 2, inventory_id: 1, quantity: 65, weight_id: 2},
        {user_id: 3, inventory_id: 2, quantity: 57, weight_id: 3},
        {user_id: 3, inventory_id: 3, quantity: 6, weight_id: 4},
        {user_id: 3, inventory_id: 4, quantity: 7, weight_id: 2},
        {user_id: 3, inventory_id: 5, quantity: 65, weight_id: 1},
        {user_id: 4, inventory_id: 4, quantity: 65, weight_id: 1},
        {user_id: 4, inventory_id: 3, quantity: 86, weight_id: 3},
        {user_id: 4, inventory_id: 2, quantity: 79, weight_id: 3},
        {user_id: 4, inventory_id: 1, quantity: 5, weight_id: 2},
        {user_id: 5, inventory_id: 2, quantity: 3, weight_id: 1},
        {user_id: 5, inventory_id: 3, quantity: 3, weight_id: 1},
        {user_id: 5, inventory_id: 3, quantity: 4, weight_id: 4},
        {user_id: 5, inventory_id: 3, quantity: 5, weight_id: 4},
      ]);
    });
};
