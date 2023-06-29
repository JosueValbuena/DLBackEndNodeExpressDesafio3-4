const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
    host: process.env.DB_HOST, //'localhost',
    user: process.env.DB_USER, //'postgres',
    password: process.env.DB_PASSWORD, //'postgres',
    database: process.env.DB_DATABASE, //'likeme',
    allowExitOnIdle: true
})

module.exports = { pool };