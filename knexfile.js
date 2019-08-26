// Update with your config settings.
const localPg = {
  host: "localhost",
  database: "soupkitchen",
  user: "admin",
  password: "admin"
};
const productionDBConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./data/soupKitchen.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: productionDBConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
