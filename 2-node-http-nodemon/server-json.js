/**
 * Exemplo de servidor que responde com dados no formato json (API).
 */

// importart os módulos
const http = require('http');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {

  // objeto json
  const pessoa = {
    primeiroNome: 'Joaquim',
    ultimoNome: 'Silva',
    email: 'joaquim@email.com',
    telefone: '1111111111'
  }

  // configuração do header
  res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });

  res.end(JSON.stringify(pessoa));
});

// executar o servidor
server.listen(port, localhost, console.log('Servidor rodando...'));