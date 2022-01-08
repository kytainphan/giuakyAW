const express = require('express')
const path = require('path')
const socket = require('socket.io')
const http = require('http')



const app = express()
const ser = http.createServer(app)
const sio = socket(ser)


app.use(express.static(path.join(__dirname, './public/index.html')))

//Client ket noi
sio.on('connection', socket => {
    console.log('Dang ket noi')
    socket.emit('message', 'Chao mung ban toi voi Demo Giua Ky')

    socket.broadcast.emit('message', 'Mot nguoi dung vua ket noi vao Demo')

    socket.on('disconnect', () =>{
        sio.emit('message', 'Mot nguoi dung vua dang xuat ra khoi Demo')
    })

    socket.on('chat', (idms)=>{
        sio.emit('message', idms)
    })
})


const port = 3000 || process.env.port;
app.listen(port, () => console.log('Server dang hoat dong'))

