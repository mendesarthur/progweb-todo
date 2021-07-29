const express = require('express');
const router = express.Router();
const {Tarefa} = require('../models');


router.post('/', async (req, res) => {
    try {
        const tarefa = await Tarefa.create(req.body);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tarefa = await Tarefa.findAll({
            where: {
                id: req.params.id
            }
        });
        if(tarefa.length == 0){
            res.status(404).json({message: 'Tarefa não encontrada'});
        }
        res.status(200).json(...tarefa);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await Tarefa.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result == 0) {
            res.status(404).json({message: 'Tarefa não encontrada'});
        }
        res.status(200).json({message: 'Tarefa removida com sucesso'});
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await Tarefa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (result[0] ==0){
            res.status(404).json({message:'Tarefa não encontrada'});
        }
        res.status(200).json({message: 'Tarefa atualizada com sucesso'});
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

module.exports = router;