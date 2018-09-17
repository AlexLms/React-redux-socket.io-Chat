const express = require('express');

const app = express();
const io = require('socket.io');
const port = process.env.PORT || 5001;
const fs = require('fs');
const opn = require('opn');

opn('http://localhost:5001/');

app.use(express.static(`${__dirname}/../dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}./../dist/index.html`);
});

const sock = io.listen(app.listen(port));

sock.on('connection', socket => {
  console.log('a user connected');

  socket.on('chat message', msg => {
    fs.appendFile('log.txt', `${msg.author}: ${msg.text} ${new Date()}\n`, (err) => {
      if (err) throw err;
    });
    sock.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});
