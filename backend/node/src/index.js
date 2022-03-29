const http = require('http');
const serverConfigs = require('./configs/serverConfigs');

const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;

const server = http.createServer((req,res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');

  res.end('Hello, World!');
});

server.listen(port, hostname, ()=> {
  console.log(`Servidor ${hostname} na porta ${port} Online!`);
});