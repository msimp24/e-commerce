const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const {Pool} = require('pg')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

const pool = new Pool({
 user:
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = app
