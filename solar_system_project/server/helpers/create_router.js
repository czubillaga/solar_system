const express = require('express');
const ObjectID = require('mongodb').ObjectID


const createRouter = function(collection) {
    const router = express.Router();
    // INDEX
    router.get('/', (req, res) => {
        collection.find().toArray()
        .then((docs) => { res.json(docs) })
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({ status: 500, error: err })
        })
    })
    // SHOW
    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection.findOne({ _id: ObjectID(id) })
        .then((doc) => { res.json(doc) })
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({ status: 500, error: err })
        })
    })

    // SEARCH 
    router.get('/search/:query', (req, res) => {
        const query = req.params.query
        collection.find({name: query})
            .toArray()
            .then((body) => res.json(body[0]))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    }) 

    return router

}

module.exports = createRouter