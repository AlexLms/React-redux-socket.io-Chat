const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5001;
const fs = require('fs');

app.use(express.static(`${__dirname  }/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname  }./public/index.html`);
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('chat message', msg => {
    fs.appendFile('log.txt', `${msg.author}: ${msg.text} ${new Date()}\n`, (err) => {
      if (err) throw err;
    });
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening at port1 ${port}`);
});
