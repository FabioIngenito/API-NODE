import http from 'http';

const PORT = 3000;

//A partir da URL Raiz:
const rotas = {
  '/': 'Servidor - OKAY',
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log('Hello, world!');
});
