// importar módulo/bibliotecas
const http = require('http');
const url = require('url');

// configurações de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {
  // 2 instruções de configuração do servidor (navegador)
  res.statusCode = 200; // status ok
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // tipo do conteúdo

  let q = url.parse(req.url, true).query; // consultando a string da url
  
  // exemplo de url 
  // http://127.0.0.1:3000/?nome=vinicius&sobrenome=maeda&email=vinicius@email.com

  // montagem da mensagem de retorno (template string)
  let txt = `
    Nome: ${q.nome}
    Sobrenome: ${q.sobrenome}
    E-mail: ${q.email}
  `;

  res.write(txt); // mensagem no <body> da página
  // res.write('Hello World!!');
  res.end(); // final da resposta
});

// "rodar" o servidor
server.listen(
  port, // porta de acesso ao servidor
  localhost, // endereço (IP) do servidor
  console.log('Server runinng...')
);



