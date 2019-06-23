var io = require('socket.io').listen(1337);

io.sockets.on('connection', function (socket) {
    console.log("Someone just connected!");

    // Echo back messages from the client
    socket.on('image', function (message) {
        console.log("Got image of length: " + message.length);
        socket.emit('image', message);
    });

    socket.on('sound', function (message) {
        console.log("Got sound of length: " + message.length);
        socket.emit('sound', message);
    });

    socket.on('pdf', function (message) {
        console.log("Got pdf of length: " + message.length);
        socket.emit('pdf', message);
    });
});
