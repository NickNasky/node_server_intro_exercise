var express = require("express");
var server = express();
var nick = require('./nick.json');

server.get("/", function(request, response) {
  response.send("Go to /nick to find out more about me");
});

server.get("/nick", function(request, response) {
  response.json(nick);
});

server.get("*", function(request, response){
  response.status(404);
  response.send("<h1>GO TO A DIFFERENT PAGE</h1><img src='https://media.giphy.com/media/gngO1gmBhS9na/giphy.gif' alt='go to another page'>");
});

server.listen(3000);
