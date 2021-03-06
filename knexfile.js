require('dotenv').config();
const path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.resolve(__dirname, 'database/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database/seeds/dev')
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database/db.sqlite')
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.resolve(__dirname, 'database/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database/seeds/dev')
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.resolve(__dirname, 'database/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database/seeds/dev')
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.resolve(__dirname, 'database/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database/seeds/dev')
    }
  }

};
