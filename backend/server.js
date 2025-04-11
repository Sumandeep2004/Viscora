const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

// console.log(process.env.Mongo_URI)
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})