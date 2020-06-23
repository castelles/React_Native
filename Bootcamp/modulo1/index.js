const express = require('express');
const server = express();
server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Caio", "idade": 23 }

// CRUD - Create, Read, Update, Delete

const users = ['Caio', 'Francys', 'Samara'];

// MIDDLEWARE
server.use((req,res,next) => {
    console.time('Request');
    console.log(`Method: ${req.method} URL: ${req.url}`);
    next();
    console.timeEnd('Request');
});

function checkUsersExists (req,res,next) {
    if(!req.body.name) {
        return res.status(400).json({error: 'Username is required'})
    }
    return next();
};

function checkUserInArray (req,res,next) {
    const user = users[req.params.id];
    
    if (!user) {
        return res.status(400).json({error: 'User does not exists'})
    }

    req.user = user;

    next();
};

server.get('/users', (req,res) => {
    return res.json(users);
});

server.get('/users/:id', checkUserInArray, (req,res) => {
    // const {id} = req.params;
    return res.send({message: `Buscando o usuário ${req.user}`});
});

server.post('/users', checkUsersExists, (req,res) => {
    const { name } = req.body;
    users.push(name);
    
    return res.json(users);
});

server.put('/users/:id', checkUserInArray, checkUsersExists, (req,res) => {
    const { id } = req.params;
    const { name } = req.body;

    users[id] = name;
    return res.json(users);
});

server.delete('/users/:id', checkUserInArray, (req,res) => {
    const { id } = req.params;
    users.splice(id,1);

    return res.send();

})

server.listen(3000);