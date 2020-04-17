let socket = io()

socket.on('connect',()=>{
  console.log('Connected to server');
});

socket.on('disconnect',()=>{
  console.log('Disconnected to server');
});

socket.on('newMessage', (msg)=>{
  console.log('New msg', msg)
  const li = document.createElement('li');
  li.className = 'list-unstyled'
  li.innerText = `${msg.from}: ${msg.text}`;
  document.querySelector('body').appendChild(li);
});

socket.on('newLocationMsg',(msg)=>{
  const li = document.createElement('li');
  const atag = document.createElement('a');
  atag.setAttribute('target', _blank);
  atag.setAttribute('href', msg.url);
  atag.innerText('My Current Location');
  li.appendChild(atag);
  li.className = 'list-unstyled'
  document.querySelector('body').appendChild(li);
});

document.querySelector('#submit-btn').addEventListener('click',(e)=>{
  e.preventDefault();
  socket.emit('createMessage',{
    from:'User',
    text: document.querySelector("input[name='message']").value
  },()=>{
    //acknowledgement 
  });
});

document.querySelector('#send-location').addEventListener('click',(e)=>{
  if(!navigator.geolocation){
    return alert('Geolocation is not supported by your browser');
  }
  else{
    navigator.geolocation.getCurrentPosition((position)=>{
      socket.emit('createLocationMsg',{
        lat: position.coords.latitude,
        long: position.coords.longitude
      },
      ()=>{
        //acknowledgement 
      })
    },
    ()=>{
      alert('Unable to fetch location')
    })
  }
});