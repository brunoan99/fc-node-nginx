const express = require('express')

const port  = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
