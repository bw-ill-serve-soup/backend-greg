
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory')
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {quantity: 500, weightUnit: "lbs", inventoryItem: "meat", user_id: 1},
        {quantity: 3, weightUnit: "pallets", inventoryItem: "potatoes", user_id: 1},
        {quantity: 300, weightUnit: "oz", inventoryItem: "pork", user_id: 1},
        {quantity: 500, weightUnit: "lbs", inventoryItem: "beef", user_id: 2},
        {quantity: 30, weightUnit: "pallets", inventoryItem: "potatoes", user_id: 2},
        {quantity: 2, weightUnit: "trucks", inventoryItem: "cauliflower", user_id: 2},
        {quantity: 50, weightUnit: "bodies", inventoryItem: "chicken", user_id: 3},
        {quantity: 30, weightUnit: "frozen patties", inventoryItem: "salmon", user_id: 3},
        {quantity: 10, weightUnit: "bags", inventoryItem: "kung pao chicken", user_id: 3},
        {quantity: 60, weightUnit: "cartons", inventoryItem: "eggs", user_id: 4},
        {quantity: 8, weightUnit: "vines", inventoryItem: "strawberries", user_id: 4},
        {quantity: 3000, weightUnit: "cans", inventoryItem: "mushroom soup", user_id: 4},
        {quantity: 5000, weightUnit: "tentacles", inventoryItem: "squid", user_id: 5},
        {quantity: 54, weightUnit: "strips", inventoryItem: "bacon", user_id: 5},
        {quantity: 8000000000, weightUnit: "Don't ask", inventoryItem: "soylent green", user_id: 5},
      ]);
    });
};
