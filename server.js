// required dependencies
var express = require('express');
var bodyParser = require('body-parser');
//var logger = require('morgan');
var mongojs = require('mongojs');


// create an instance of the server
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));


// setup mongojs connection
var database = 'nytreact';
var collection = ['articles'];

  //var db = mongojs(process.env.MONGODB_URI, collection);
var db = mongojs(database, collection);

db.on('error', function(err){

  console.log('MongoDB Error: ', err);
});


// express.js routes
app.get('/', function(req, res){
  res.send('./public/index.html');
});

app.get('/api/saved', function(req, res){

});

app.post('/api/saved', function(req, res){

});

app.delete('/api/saved', function(req, res){

});


// listening 
app.listen(PORT, function(){
  console.log('listening on PORT ', PORT);
});