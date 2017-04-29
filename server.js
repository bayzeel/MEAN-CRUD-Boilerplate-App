var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName:  String,
    lastName: String
});

var Person = mongoose.model('Person', personSchema);

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/dist'));

app.get("/api/list", function(req, res){
    mongoose.connect('mongodb://localhost:27017/personBoilerplateDB');

    Person.find({}, function(err, docs){
        mongoose.disconnect();

        if(err) return console.log(err);

        console.log('docs', docs);
    });
    console.log('res', res);
});

app.listen(port, function(){
    console.log('Server is connecting...');
});


/*var person1 = new Person({firstName: 'John', lastName: 'Doe'});
var person2 = new Person({firstName: 'Jane', lastName: 'Doe'});

person1.save(function(err){
    if(err) return console.log(err);
    console.log("Сохранен объект", person1);
});
person2.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);
    console.log("Сохранен объект", person2);
});*/