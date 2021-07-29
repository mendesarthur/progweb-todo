const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const { Tarefa } = require('./models');
const routerTarefa = require('./routes/tarefas');

app.use(bodyParser.json());

//////////////// Rotas do estado do servidor

app.get('/', (req, res) => {
    res.send('Running... =)');
});

//////////////// Rotas das tarefas
app.use('/tarefas', routerTarefa);


app.listen(4000);