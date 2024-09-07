const http = require('http');

http.createServer((request, response) => {

    console.log(request.url);
    if (request.url === '/hola') {
        response.write('Hola Mundo!');
        return response.end();
        
    }
    if (request.url === '/adios') {
        response.write('Adios Mundo!');
        return response.end();
    }
    response.write('<h1>404</h1>');
    response.end();
}).listen(3000);

console.log('Servidor corriendo en el puerto http://localhost:3000/')