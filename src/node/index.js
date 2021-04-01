//Protocol used for server
const http = require('http');
const app = require('./app.js');

//Asigning port
const port = process.env.port || 3001;

//Creating http server and mount app for it
const server = http.createServer(app);

//Server up info message
server.listen(port, () => {
    console.log('server on port', port);
    console.log('http://localhost:' + port + '/');
});