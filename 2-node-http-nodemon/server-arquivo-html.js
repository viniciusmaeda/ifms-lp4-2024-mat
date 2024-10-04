/**
 * Exemplo de servidor que responde com uma página html
 */

// importart os módulos
const http = require('http');
const fs = require('fs'); // módulo para abrir arquivo

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {
  // configuração do header
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });

  // carregar o arquivo .html para uma constante
  const arquivoHtml = fs.readFileSync('./index.html');

  // responde com o arquivo html
  res.end(arquivoHtml);
});

// executar o servidor
server.listen(port, localhost, console.log('Servidor rodando...'));