/**
 * Servidor que realiza as operações matemáticas de dois parâmetros enviados através da url
 */

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
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // tipo do conteúdo (formato HTML)

  let q = url.parse(req.url, true).query; // consultando a string da url
  
  // exemplo de url 
  // http://127.0.0.1:3000/?n1=2&n2=3

  // montagem da mensagem de retorno (template string)
  let n1 = Number(q.n1);
  let n2 = Number(q.n2);
  let txt = `
    A soma de ${n1} + ${n2} = <b>${n1 + n2}</b><br>
    A subtração de ${n1} - ${n2} = <b>${n1 - n2}</b><br>
    A divisão de ${n1} / ${n2} = <b>${n1 / n2}</b><br>
    A multiplicação de ${n1} * ${n2} = <b>${n1 * n2}</b>
  `; // texto formato como código html

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



