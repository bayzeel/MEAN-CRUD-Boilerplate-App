/**
 * Get dependencies
 */
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const dbUrl = 'mongodb://localhost:27017/personBoilerplateDB';

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName:  String,
    lastName: String
});

const Person = mongoose.model('Person', personSchema);

/**
 * GET api listing
 */
router.get('/', (req, res) => {
    res.send('api works');
});

/**
 * GET all records
 */
router.get('/list', (req, res) => {
    // DB connection
    mongoose.connect(dbUrl);

    Person.find({}, (err, records) => {
        mongoose.disconnect();

        if(err) return console.log(err);

        res.status(200).send(records);
    });
});

module.exports = router;