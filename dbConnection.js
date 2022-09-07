const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "lion123",
    database: "orderSystemDb"
})

module.exports = client