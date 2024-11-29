// importação das biblioetas
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();


// rota raiz para DOCENTE
rotas.get("/", (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a raiz da rota docente.'
  })
});

// rota put para DOCENTE
rotas.put('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Os dados do docente foram atualizados com sucesso.'
  });
});

// rota para o médoto post
rotas.post('/', (req, res) => {

  // implementação do recebimento dos dados para salvar no BD

  res.status(201).send({
    mensagem: 'Docente cadastrado com sucesso.'
  });
});

// rota para o médoto delete
rotas.delete('/', (req, res) => {
  res.status(202).send({
    mensagem: 'Docente excluído com sucesso.'
  });
});



// exportar o código que manipula a rota para estudante
module.exports = rotas