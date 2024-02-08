const app = require ('./src/app');
const http = require('http');

const port = process.env.PORT || 3333;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Servidor executando na porta:', port);
});

module.exports = server;