const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const {Tarefa} =require('./models/');

app.use(bodyParser.json());

//////////// Rotas do estado do servidor

app.get('/',(req, res) =>{
    res.send('Running...=)');
});

////////////Rotas das tarefas

app.post('/tarefas',async (req, res)=> {
    const tarefa = await Tarefa.create(req.body);
    res.send(tarefa);
});

app.get('/tarefas', async(req, res)=>{
    const Tarefas = await Tarefa.findAll();
    res.send(tarefas);
});

app.listen(4000);