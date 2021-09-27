const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const players = [];

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('all players', players);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('add player', (payload) => {
        players.push(payload);
        io.emit('add player', payload);
      });
      socket.on('player move', (payload) => {
        io.emit('player move', payload);
      });
});
const port = 3002;
server.listen(port, () => {
  console.log('listening on http://localhost:' + port );
});