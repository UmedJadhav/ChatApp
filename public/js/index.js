let socket = io()

socket.on('connect',()=>{
  console.log('Connected to server');
});

socket.on('disconnect',()=>{
  console.log('Disconnected to server');
});

socket.on('newMessage', (msg)=>{
  console.log('New msg', msg)
});

socket.emit('createMessage', {
  from: 'John' ,
  text: 'hey Fias'
}, (msg)=>{
  console.log(msg);
})