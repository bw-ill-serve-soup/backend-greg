const knext = require("knex")
const knexConfig = require("../knexfile")

// change config.development to production once tables form ready
module.exports = knex(config.development)