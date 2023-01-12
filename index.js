const express = require('express');
const http = require('http');
const app = express();
const { Server } = require('socket.io');

const httpServer = http.createServer(app);
const io = new Server(httpServer);


// io.on("connection", (socket) => {
//     console.log("new user connected to our application");
//     socket.on("disconnect", (socket) => {
//         console.log("user disconnected from our application");
//     })

//     // socket.send("hello world");
//     socket.on("testEvent", (message) => {
//         console.log("user sent a message: ", message);
//     });

//     // Broadcasting event
//     io.sockets.emit("FIFA world cup", "Hello football")
// })


let fifa = io.of("/worldCup");

fifa.on("connection", (socket) => {
    fifa.emit("worldCupEvent", "Hello fifa world cup");
})




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app.html');
})

httpServer.listen(5000, function () {
    console.log('listening on port 5000');
});
