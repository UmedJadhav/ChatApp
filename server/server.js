const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const PORT = process.env.PORT || 3000 ;
const public_path = path.join(__dirname, '/../public')
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(public_path));

io.on('connection', (socket)=>{
  console.log(`A new user just connected`);

  socket.on('disconnect', ()=>{
    console.log(`user just disconnected`);
  })
})


server.listen(PORT, ()=>{
  console.log(`Server is up at port ${PORT}`)});
