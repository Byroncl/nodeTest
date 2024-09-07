const fs = require('fs');

const hola = fs.readFileSync('./random/uno.txt', 'utf-8');

console.log(hola);

fs.writeFileSync('./random/dos.txt', hola);