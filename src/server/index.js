const app = require('http').createServer();
const io = require('socket.io')(app);

module.exports = {
  io,
};

const PORT = process.env.PORT || 3231;

const SocketManager = require('./SocketManager');

io.on('connection', () => console.log('Socket ID'));

app.listen(PORT, () => console.log(`Server is up running on port ${PORT}`));
