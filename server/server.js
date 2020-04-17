const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const generate_message = require('./utils/message');

const PORT = process.env.PORT || 3000 ;
const public_path = path.join(__dirname, '/../public')
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(public_path));

io.on('connection', (socket)=>{
  // socket -> connection to the user who made the connection
  // io -> connection to all the users connected.
  
  console.log(`A new user just connected`);
  socket.emit('newMessage',generate_message('Admin','Welcome to the Chat'));  
  //socket.broadcast sends msg to all but not to itself
  socket.broadcast.emit('newMessage',generate_message('Admin','A new user has joined the chat'));

  socket.on('createMessage', (msg, callback) => {
    console.log('createMsg', msg);
    io.emit('newMessage',generate_message(msg.from,msg.text));
    callback('This is the server');
  });

  socket.on('disconnect', ()=>{
    console.log(`user just disconnected`);
  });
});


server.listen(PORT, ()=>{
  console.log(`Server is up at port ${PORT}`)});
