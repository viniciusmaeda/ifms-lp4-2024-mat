// importação das biblioetas
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();


// rota raiz para ESTUDANTE
rotas.get("/", (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a raiz da rota estudante.'
  })
});

// rota put para ESTUDANTE
rotas.put('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Os dados do estudante foram atualizados com sucesso.'
  });
});

// rota para o médoto post
rotas.post('/', (req, res) => {

  // implementação do recebimento dos dados para salvar no BD

  res.status(201).send({
    mensagem: 'Estudante cadastrado com sucesso.'
  });
});

// rota para o médoto delete
rotas.delete('/', (req, res) => {
  res.status(202).send({
    mensagem: 'Estudante excluído com sucesso.'
  });
});



// exportar o código que manipula a rota para estudante
module.exports = rotas