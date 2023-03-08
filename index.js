const express = require('express');
const app = express();

const port = 8080;

/*
app.get('/helloworld', (req,res) => {
    res.send("Hello World ❤️");
});
*/

/**
 * Hello world by a json file
 */
const helloworld = require('./helloworld.json');
app.get('/helloworld', (req,res) => {
    res.status(200).json(helloworld)
});

/**
 * Make the server alive and connectable
 */
app.listen(port, () => {
    console.info('Serveur en ligne sur le port : ' + port);
});