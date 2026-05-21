const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('DataVision App funcionando en AWS EC2');
});

server.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});