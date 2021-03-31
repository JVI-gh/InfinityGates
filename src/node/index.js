const http = require('http');
const app = require('./app.js');

const port = process.env.port || 3001;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server on port', port);
    console.log('http://localhost:' + port + '/');
});