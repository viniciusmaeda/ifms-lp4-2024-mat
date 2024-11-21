/**
 * Exemplo de servidor que responde com um código html
 */

// importart os módulos
const http = require('http');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {
  // configuração do header
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });

  res.write(`
    <h1>Título de nível 1</h1>
    <p>Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Explicabo facilis voluptates expedita nam cum architecto recusandae sint velit at. Fugit eius aliquid est veniam tenetur laudantium iure corporis nostrum soluta rerum officiis hic, quibusdam repellendus incidunt quod quaerat. Excepturi eveniet facilis qui molestiae officia ab consequatur quasi tempore quidem. Perferendis!<p>
  `);
  res.end();
});

// executar o servidor
server.listen(port, localhost, console.log('Servidor rodando...'));