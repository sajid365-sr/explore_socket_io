const express = require('express');
const http = require('http');
const app = express();


const server = http.createServer(app);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app.html');
})

app.listen(5000, function(){
    console.log('listening on port 5000');
});