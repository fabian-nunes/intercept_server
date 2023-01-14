//Create a simple restful API with Express to log data on get requests

//Dependencies
var express = require('express');
var app = express();

//Routes
//Log data on post requests
app.post('/', function(req, res) {
    //log data from post request body json
    let email = req.body.email;
    console.log(email);
    //Send a response
    res.send('Data received');
});
app.get('/', function(req, res){
    res.send('Just a normal web page....');
});

var port = process.env.PORT || 8080;

//Start server
app.listen(port, function(){
    console.log('Server running on port 3000');
});