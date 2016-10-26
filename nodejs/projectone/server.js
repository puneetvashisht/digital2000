//Proper way of doing express install
// Create a package.json
// Install dependencies of npm packages --save
// run server.js

// Integrate static middleware
// Integrate ANgularJS with NodeJS

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.use(express.static('webcontent'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/authenticate', function(req,res){
    console.log(req.body)
    if(req.body.email === req.body.pwd){
         res.json({auth:true})
    }
    res.json({auth:false})
})

app.delete('/', function(req,res){
    res.send('Response to HTTP Delete request')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});