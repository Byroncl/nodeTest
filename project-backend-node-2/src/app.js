const http = require('http');

const server = http.createServer((req, res) => { 
    if (req.url === '/') {
        return res.end('Home');
    }
    if (req.url === '/productos') {
        return res.end('productos');
    }
    if (req.url === '/contacto') {
        return res.end('contacto');
    }

    res.end('404');

});

server.listen(3000);
console.log('Server on port http://localhost:3000');