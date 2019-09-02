require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')

// Controllers
const ctrl = require('./controller')

// MiddleWare

// env Variables
const {
    CONNECTION_STRING
} = process.env

// App Instance
const app = express()

// TLM
app.use(express.json())
app.use(cors())

// Database Conneciton
massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Database is Connected 🐅')
    })
    .catch(err => {
        console.log(err)
    })

// Endpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/house', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)

// App Listening
app.listen(4000, () => {
    console.log('Server is Running 🐔')
})