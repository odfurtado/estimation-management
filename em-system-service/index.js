const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {SystemController} = require('./controller');

const SERVER_PORT = process.env.SERVER_PORT || '5000';

var app = express();
app.use(bodyParser.json());

app.post('/system', async (req, res) => {
    var body = _.pick(req.body, ['name', 'category', 'domain', 'database', 'databaseOwner', 'factory']);

    try {
        var system = await new SystemController().save(body);
        if (!system) {
            return res.status(404).send();
        }

        res.send(system);
    } catch (e) {
        res.status(400).send(e.message);
    }
    
});


app.patch('/system/:id', async (req, res) => {
    try {
        var system = await new SystemController().remove(req.params.id);
        
        if (!system) {
            return res.status(404).send();
        }

        res.send(system);
    } catch (e) {
        console.log('Erro ' + e);
        res.status(400).send(e.message);
    }
});

app.get('/system/:id', async (req, res) => {
    try {
        var system = await new SystemController().get(req.params.id);
        
        if (!system) {
            return res.status(404).send();
        }

        res.send(system);
    } catch (e) {
        console.log('Erro ' + e);
        res.status(400).send(e.message);
    }
});

app.delete('/system/:id', async (req, res) => {
    try {
        var system = await new SystemController().remove(req.params.id);
        
        if (!system) {
            return res.status(404).send();
        }

        res.send(system);
    } catch (e) {
        console.log('Erro ' + e);
        res.status(400).send(e.message);
    }
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);
});