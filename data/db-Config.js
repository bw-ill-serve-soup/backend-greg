

const knex = require("knex")
const knexConfig = require("../knexfile")

// Give DB_ENV to env vars on Heroku
// knexConfig pointed to dbENV in knexfile
// knexfile points to productionDBConnection
// productionDBConnection points to process.env, which is a Heroku-generated variable
const dbENV = process.env.DB_ENV || "development"
//module.exports = knex(knexConfig.development)
module.exports = knex(knexConfig[dbENV])