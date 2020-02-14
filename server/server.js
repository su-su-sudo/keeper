// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/keeperDB", {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', function(req, res){
  res.send({express: "Hello"});
});


//port //
let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.listen(port, function(){
  console.log("server has started.");
});
