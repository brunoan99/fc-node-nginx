const express = require('express')

const port  = 3000
const app = express()
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', async (req, res) => {
  let message = '<h1>Full Cycle Rocks!</h1>'
  const sql = 'SELECT name FROM people;'
  await connection.query(sql, function (err, rows) {
    if (err) throw err
    rows.forEach(r => {
      message += `<p>${r.name}</p>`
    });
    res.send(message)
  })
})


app.get('/add-name/:name', async (req, res) => {
  const { name }  = req.params
  const sql = `INSERT INTO people(name) values('${name}');`
  await connection.query(sql)
  res.send(`<h1>Nome ${name} cadastrado</h1>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})