const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})
app.use(awsServerlessExpressMiddleware.eventContext())

connection = mysql.createConnection({
  host: "db4free.net",
  user: "guigui",
  password: "Aq'2xmK94s9#tdZ",
  database: "objetos_aprendiz"
})

connection.connect()

app.get('/', function (req, res) {

  connection.query("SELECT * FROM modulo", function (error, results, fields) {
      res.send(JSON.parse(JSON.stringify(results)))
  })

})

app.get('/modulos/:id', function (req, res) {

  var id = req.params.id
  connection.query(`SELECT * FROM aula WHERE modulo_id = ${id}`, function (error, results, fields) {
      res.send(JSON.parse(JSON.stringify(results)))
  })

})

app.get('/aulas', function (req, res) {

  connection.query(`SELECT * FROM aula`, function (error, results, fields) {
      res.send(JSON.parse(JSON.stringify(results)))
  })

})

app.get('/aulas/:id', function (req, res) {

  var id = req.params.id
  connection.query(`SELECT * FROM aula WHERE id = ${id}`, function (error, results, fields) {

      if (results == undefined) {
          results = {
              id: 99,
          }
      }

      res.send(JSON.parse(JSON.stringify(results)))
  })

})

app.get('/search/:q', function (req, res) {

  var q = req.params.q

  connection.query(`SELECT * FROM aula WHERE titulo LIKE "%${q}%"`, function (error, results, fields) {

      if (results === undefined || results.length === 0) {
          results = {
              id: 99,
          }
      }
      else
      {
          results = results[0]
      }

      res.send(JSON.parse(JSON.stringify(results)))
  })

})

app.listen(3000, () => {
  console.log('Servidor aberto :)')
})

module.exports = app
