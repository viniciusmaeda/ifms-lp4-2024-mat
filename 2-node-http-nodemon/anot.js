/**
 * Exemplo de servidor que responde com páginas html
 */

// importart os módulos
const http = require('http');
const fs = require('fs'); // módulo para abrir arquivo

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {

  // extrar a url
  const url = req.url;

  // condicional que verifica as rotas
  if (url == '/') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });

    // carregar o arquivo .html para uma constante
    const arquivoHtml = fs.readFileSync('./home.html');

    // responde com o arquivo html
    res.end(arquivoHtml);

  } else if (url == '/sobre') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });

    // carregar o arquivo .html para uma constante
    const arquivoHtml = fs.readFileSync('./sobre.html');

    // responde com o arquivo html
    res.end(arquivoHtml);

  } else if (url == '/api') {
    // configuração do header
    res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });

    // dado no formato json
    const pessoa = {
      primeiroNome: 'Joaquim',
      ultimoNome: 'Silva',
      email: 'joaquim@email.com',
      telefone: '1111111111'
    }

    // responde com o dado no formato json
    res.end(JSON.stringify(pessoa));

  } else {
    // configuração do header
    res.writeHead(404, { 'Content-Type' : 'text/plan' });

    res.end();

  }

});

// executar o servidor
server.listen(port, localhost, console.log('Servidor rodando...'));