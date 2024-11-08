// importação da biblioteca Express
const express = require('express')

// criação de um app Express
const app = express();

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

// rota raiz da aplicação
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// rota para veículos
app.get('/veiculo', (req, res) => {
  res.send('Você está na rota veículo.');
});

// rota para clientes
app.get('/cliente', (req, res) => {
  res.send('Você está na rota cliente.')
});

app.put('/veiculo/salvar', (req, res) => {
  res.send('Dados salvos com sucesso.');
});

app.delete('/veiculo/excluir', (req, res) => {
  res.send('Dados excluídos com sucesso.');
});

// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));