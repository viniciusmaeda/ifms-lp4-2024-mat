// importação das biblioetas
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();


// rota raiz para estudante
rotas.get("/", (req, res) => {
  res.send("Você está na raíz da rota estudante");
});

// rota put para estudante
rotas.put('/', (req, res) => {
  res.send('Você está na rota put para estudante.');
});


// rota para o médoto post


// rota para o médoto delete



// exportar o código que manipula a rota para estudante
module.exports = rotas