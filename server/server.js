//Importando dependências do projeto
    const express = require('express');
    const cors = require('cors');
    const path = require('path');
    const database = require('./database/database');
<<<<<<< HEAD
=======
    const Pombo = require('./database/models/Pombo');
>>>>>>> 69c1feb (Fazendo a página de Create (comentar ainda))

//Configurando o servidor
    const app = express();
    app.use(express.static(path.join(__dirname, "public")));
    app.use(cors());
    app.use(express.json());










//Abrindo servidor
<<<<<<< HEAD
    app.listen(8081, () => {
=======
    const port = 8081;
    app.listen(port, () => {
>>>>>>> 69c1feb (Fazendo a página de Create (comentar ainda))
        console.log('Server initialized on Localhost:8081');
    })