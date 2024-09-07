const EventEmitter = require('events');

const customEmitter = new EventEmitter();



customEmitter.on('response', (data) => {
    console.log(`data received: ${data}`);
}); 

customEmitter.emit('response', 'Hello world');
customEmitter.emit('response', 'coso');