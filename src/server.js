const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

//Servidor do express
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pvbod.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

//Porta que o servidor vai ouvir
server.listen(3333);