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

  const url = req.url;

  // manipulação das rotas do site
  if (url == '/') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    
    res.write('Você está na rota <b>raiz</b> do site.');
    res.end();

  } else if (url == '/contato') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    
    res.write('Você está na rota <b>contato</b> do site.');
    res.end();

  } else if (url == '/sobre') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    
    res.write('Você está na rota <b>sobre</b> do site.');
    res.end();

  } else if (url == '/api') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });

    res.end(JSON.stringify({
      nome: 'Vinícius',
      email: 'vinicius@email.com'
    }));

  } else {
    // configuração do header
    // 404 página não encontrada
    res.writeHead(404, { 'Content-Type' : 'text/plain; charset=utf-8' });
    
    res.write('Esta página não existe.');
    res.end();
  }



});

// executar o servidor
server.listen(port, hostname, console.log('O servidor está rodando...'));
