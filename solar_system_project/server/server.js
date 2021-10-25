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
        const moonsCollection = db.collection('moons')
        const asteroidsCollection = db.collection('asteroids')
        const planetsRouter = createRouter(planetsCollection)
        const moonsRouter = createRouter(moonsCollection)
        const asteroidsRouter = createRouter(asteroidsCollection)
        app.use('/api/planets', planetsRouter)
        app.use('/api/moons', moonsRouter)
        app.use('/api/asteroids', asteroidsRouter)
})

.catch(console.error)
app.listen(5000, function() {
    console.log(`Listening on port ${ this.address().port }`)
});

