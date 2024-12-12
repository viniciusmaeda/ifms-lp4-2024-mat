// Lista de Exercício 4
// Implementação de um rotas

// importação da biblioteca Express
// para instalar rodo o comando: npm install express
const express = require('express')

const path = require('path');

// instalação: npm install body-parser
const bodyParser = require('body-parser');

 // módulo para abrir arquivo
const fs = require('fs');

// criação de um app Express
const app = express();

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importação das rotas
const veiculoRotas = require('./src/routes/Veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {

  res.status(200).sendFile(path.join(__dirname, 'src', 'pages', 'index.html'));

})

// utilizar as rotas
app.use('/veiculo', veiculoRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));
