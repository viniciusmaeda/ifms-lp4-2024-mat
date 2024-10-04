/**
 * Exemplo de um servidor básico Node utilizando o módulo http
 */

// importando o módulo http
const http = require('http');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

// configuração inicial do servidor HTTP
const server = http.createServer((requisicao, resposta) => {
  resposta.statusCode = 200;
  resposta.setHeader('Content-Type', 'text/plan; charset=utf-8');
  resposta.write('Olá! Este é um servidor HTTP e está rodando localmente.');
  resposta.end();n
});

// executar o servidor
server.listen(port, hostname, console.log('O servidor está rodando...'));