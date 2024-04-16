import http from 'http';

const PORT = 3000;

//A partir da URL Raiz:

const rotas = {
  '/': 'Servidor - OKAY - HTTP',
  '/cachorros': 'Entrei na rota cachorro - HTTP',
  '/racas': 'Entrei na rota raca - HTTP',
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log('Hello, world! - HTTP');
});
