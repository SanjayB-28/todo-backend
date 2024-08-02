const express = require('express');
const jwt = require('jsonwebtoken');
const { createTodo } = require('./types');
const { todo } = require('./db') 
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'you sent the wrong inputs',
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: 'todo created',
    })
})

app.get('/todos', async function(req,res){
    const todos = await todo.find();
    res.status(200).json({
        todos
    })
})

app.put('/completed', async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'you sent the wrong inputs',
        })
        return;
    }

    await todo.update({
        _id: req.body.id,

    },{
        completed: true,
    })

    res.json({
        msg: 'todo has been marked complete'
    })
})

app.listen(3030);