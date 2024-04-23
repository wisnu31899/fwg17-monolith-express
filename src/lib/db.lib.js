const pg = require('pg')

const db = new pg.Pool({
  // // localhost
  // connectionString: "postgresql://postgres:1@localhost:5432/monolith?sslmode=disable"

  // // db docker
  connectionString: 'postgresql://postgres:1@db:5432/postgres?sslmode=disable'
})

db.on('connect', () => {
  console.log('DB Connected')
})

module.exports = db
