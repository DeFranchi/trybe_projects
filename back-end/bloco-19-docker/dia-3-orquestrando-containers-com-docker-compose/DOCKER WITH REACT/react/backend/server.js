const express = require('express');
const cors = require('cors');


const config = {
    name: 'sample-express-app',
    port: 3000,
    host: '0.0.0.0',
};

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/tarefas', (req, res) => {
    const tarefas = [
        {
            nome: 'cozinhar',
            dia: 6,
            
        },
        {
            nome: 'lavar',
            dia: 7,
            
        },
        {
            nome: 'limpar',
            dia: 2,
            
        }


    ]
    res.status(200).send(tarefas);
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
});