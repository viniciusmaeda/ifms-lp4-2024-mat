/**
 * Exemplo de servidor que manipula rotas requisitadas pelo usuário
 */

// importando o módulo http
const http = require('http');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

// configuração inicial do servidor HTTP
const server = http.createServer((req, res) => {
  // configuração do header
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });

  // extrar a url
  const url = req.url;

  // manipulação da url
  if (url == '/') {
    res.write('Você acessou a raiz do site.')
  } else if (url == '/aquidauana') {
    res.write('Você acessou o campus Aquidauana.');
  } else {
    res.write('Página não encontrada.')
  }

  res.end();
});

// executar o servidor
server.listen(port, hostname, console.log('O servidor está rodando...'));