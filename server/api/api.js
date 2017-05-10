/**
 * Get dependencies
 */
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

const dbUrl = 'mongodb://localhost:27017/personBoilerplateDB';

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName:  String,
    lastName: String
});

const Person = mongoose.model('Person', personSchema);

var jsonParser = bodyParser.json();

/**
 * GET api listing
 */
router.get('/', (req, res) => {
    res.send('api works');
});

/**
 * GET all records
 */
router.get('/items', (req, res) => {
    // DB connection
    mongoose.connect(dbUrl);

    Person.find({}, (err, records) => {
        mongoose.disconnect();

        if(err) return console.log(err);

        res.status(200).send(records);
    });
});

/**
 * POST item
 */
router.post('/add', jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);

    mongoose.connect(dbUrl);

    Person.create(req.body, (err, record) => {
        mongoose.disconnect();

        if(err) return console.log(err);
        
        res.send(req.body);
    });
});


module.exports = router;