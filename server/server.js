const express = require('express')
const socketIO = require('socket.io')
const path    = require('path')
const http = require('http')
const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const PORT = process.env.PORT || 3000

app.use(express.static(publicPath))

io.on('connection', () => {
    console.log('IO connection')
})

server.listen(PORT, () => {
    console.log("Server is running...")
})