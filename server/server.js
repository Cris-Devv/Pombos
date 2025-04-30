//Importando dependências do projeto
    const express = require('express');
    const cors = require('cors');
    const path = require('path');
    const database = require('./database/database');

//Configurando o servidor
    const app = express();
    app.use(express.static(path.join(__dirname, "public")));
    app.use(cors());
    app.use(express.json());










//Abrindo servidor
    app.listen(8081, () => {
        console.log('Server initialized on Localhost:8081');
    })