// make connextion
var socket = io.connect('http://localhost:4000');

// Query DOM
var messages    = document.getElementById('messages'),
    handle	= document.getElementById('handle'),
    btn		= document.getElementById('send'),
    output	= document.getElementById('output');

// send an event 
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: messages.value,
        handle: handle.value
    });
});

// Listening events
socket.on('chat', function(data){
    output.innerHTML += '<p><b>'+data.handle+'</b> : '+data.message+'</p>';
});

// console.log("Client script page", messages, handle, btn, output );

