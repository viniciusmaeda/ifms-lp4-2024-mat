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

// rota raiz para ESTUDANTE
rotas.get("/:idEstudante", (req, res) => {

  // obter o id enviado pela url
  const idEstudante = req.params.idEstudante;

  res.status(200).send({
    mensagem: `O id recebido foi: ${idEstudante}.`
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
  const novoEstudante = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
  };

  // implementação do código para enviar para BD

  res.status(201).send({
    mensagem: 'Estudante cadastrado com sucesso.',
    dadosNovoEstudante: novoEstudante
  });
});

// rota para o médoto delete
rotas.delete('/', (req, res) => {

  // obtém o id enviado pelo corpo da requisição
  const idEstudante = req.body.idEstudante;

  // implementação da consulta para verificar se existe o estudante
  consultaIdBancoDados = 123

  if (idEstudante == consultaIdBancoDados) {
    res.status(202).send({
      mensagem: `O estudante de id: ${idEstudante} excluído com sucesso.`
    });
  } else {
    res.status(200).send({
      mensagem: 'O estudante não foi encontrado no banco de dados.'
    });
  }
});



// exportar o código que manipula a rota para estudante
module.exports = rotas