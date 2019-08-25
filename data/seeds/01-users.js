
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "admin", password: "admin"},
        {username: "Rex", password: "asdf"},
        {username: "Susi", password: "asdf"},
        {username: "Calvin", password: "asdf"},
        {username: "Hobbes", password: "asdf"},
      ]);
    });
};
