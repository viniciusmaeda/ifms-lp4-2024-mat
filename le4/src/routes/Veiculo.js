// importação das biblioetas
const express = require('express');

// biblioteca para manipular os parâmetros da url
const url = require('url');

// função para manipulação de rotas
const rotas = express.Router();

// POST
// rota para o médoto post
rotas.post('/', (req, res) => {

  // implementação do recebimento dos dados para salvar no BD
  const novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anomodelo: req.body.anomodelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
  }

  // responde com os dados obtidos pela requisição
  res.status(201).send({
    mensagem: 'Veículo cadastrado com sucesso!',
    veiculo: novoVeiculo
  });
});


// PUT
// rota para o médoto put
rotas.put('/', (req, res) => {

  // implementação do recebimento dos dados para salvar no BD
  const atualizaVeiculo = {
    idveiculo: req.body.idveiculo,
    preco: req.body.preco
  }

  res.status(200).send({
    mensagem: 'Os dados do docente foram atualizados com sucesso.',
    veiculo: atualizaVeiculo
  });
});


// DELETE
// rota para o médoto delete
rotas.delete('/:idveiculo', (req, res) => {

  // obtém o id recebido pela url
  const idveiculo = req.params.idveiculo;
  

  res.status(202).send({
    mensagem: `O veículo de ID: ${idveiculo} foi excluído com sucesso.`
  });
});



// exportar o código que manipula a rota para estudante
module.exports = rotas