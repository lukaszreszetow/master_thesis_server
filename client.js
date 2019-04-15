var io = require('socket.io-client');


client.connect(1337, 'localhost', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
    client.emit('message', 'costam')
});

client.on('data', function(data) {
    console.log('Received: ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});

