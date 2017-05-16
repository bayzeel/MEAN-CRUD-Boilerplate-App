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
    itemID: Number,
    firstName:  String,
    lastName: String
});

const Person = mongoose.model('Person', personSchema);

let jsonParser = bodyParser.json();

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
 * GET one record
 */
router.get('/delete/:itemID', (req, res) => {
    let itemIDParam = req.params.itemID;

    // DB connection
    mongoose.connect(dbUrl);

    Person.findOne({itemID: itemIDParam}, (err, record) => {
        mongoose.disconnect();

        if(err) return console.log(err);

        res.status(200).send(record);
    });
});

/**
 * POST item
 */
router.post('/add', jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);

    mongoose.connect(dbUrl);

    let addItem = new Promise((resolve, reject) => {
        Person.find({}, (err, records) => {

            if(err) return console.log(err);

            if(Math.max.apply(Math, records.map((r) => {r.itemID})) === -Infinity){
                req.body.itemID = 1;
            }else{
                req.body.itemID = Math.max.apply(Math, records.map((r) => {return r.itemID})) + 1;
            }
            resolve();
        });
    });

    addItem.then(() => {
        Person.create(req.body, (err, record) => {
            mongoose.disconnect();

            if(err) return console.log(err);

            res.send(req.body);
        });
    });
});

router.delete('/delete/:itemID', (req, res) => {
    let itemIDParam = req.params.itemID;
    // DB connection
    mongoose.connect(dbUrl);

    Person.findOneAndRemove({itemID: itemIDParam}, (err, record) => {
        mongoose.disconnect();

        if(err) return console.log(err);

        // console.log(record + ' has been successfully deleted');

        res.status(200).send(record);
    });
});


module.exports = router;