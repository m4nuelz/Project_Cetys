
/*
Proyecto_Final CRUD app
Jose Manuel Zazueta Grijalva
Test1
Test2
*/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./routes')
const port = 4000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`Proyecto_Final running on port ${port}.`)
})