const form = document.getElementById('form')

const socket = sio();

socket.on('message', message =>{
    console.log(message)
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const idms = e.target.elements.idms.value;

    socket.emit('chat', idms)
    console.log(idms)
})