/**
 * Exemplo de servidor que manipula rotas requisitadas pelo usuário
 */

// importando o módulo http
const http = require('http');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {

  // configuração do header
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });

  const url = req.url;

  // manipulação das rotas do site
  if (url == '/') {
    res.write('Você está na rota <b>raiz</b> do site.');
  } else if (url == '/contato') {
    res.write('Você está na rota <b>contato</b> do site.');
  } else if (url == '/sobre') {
    res.write('Você está na rota <b>sobre</b> do site.');
  } else {
    res.write('Esta página não existe.');
  }


  res.end();

});

// executar o servidor
server.listen(port, hostname, console.log('O servidor está rodando...'));
