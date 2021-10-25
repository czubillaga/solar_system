const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router')

app.use(express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('solar_system')
        const planetsCollection = db.collection('planets')
        const planetsRouter = createRouter(planetsCollection)
        app.use('/api/planets', planetsRouter)
})

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('solar_system')
        const moonsCollection = db.collection('moons')
        const moonsRouter = createRouter(moonsCollection)
        app.use('/api/moons', moonsRouter)
})


MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('solar_system')
        const asteroidsCollection = db.collection('asteroids')
        const asteroidsRouter = createRouter(asteroidsCollection)
        app.use('/api/asteroids', asteroidsRouter)
})

.catch(console.error)
app.listen(5000, function() {
    console.log(`Listening on port ${ this.address().port }`)
});

