let socket = io()

socket.on('connect',()=>{
  socket.emit('createMessage', {
    from: 'UJ',
    text: 'wassup'
  });
});

socket.on('disconnect',()=>{

});

socket.on('newMessage', (msg)=>{
  console.log('New msg', msg)
});