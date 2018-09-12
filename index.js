var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function() {

  console.log('listening to requests on prt 4000');
})
app.use(express.static('public'));


//socket setup

var io = socket(server);
io.on('connection', function(socket) {
  console.log("made socket connection");
  socket.on('chat', function(data) {
 io.sockets.emit('chat',data);
  })
})
