const express = require('express');
const http = require('http');
const app = express();
const { Server } = require('socket.io');

const httpServer = http.createServer(app);
const io = new Server(httpServer);


io.on("connection", (socket) => {
    console.log("new user connected to our application");
    socket.on("disconnect", (socket) => {
        console.log("user disconnected from our application");
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app.html');
})

httpServer.listen(5000, function () {
    console.log('listening on port 5000');
});