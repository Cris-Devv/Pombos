//Importando dependências do projeto
    const express = require('express');
    const cors = require('cors');
    const database = require('./database/database');
    const Pombo = require('./models/Pombo');
    const app = express();
    const path = require('path');

//Configurando o servidor
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, "public")));

//Rotas    
    app.post('/add_user', (req, res, next) => {
        (async () => {
            try {
                const connect = await database.sync();
                console.log('batata');

                const userCreate = await Pombo.create({
                    name: req.body.txtName,
                    age: parseInt(req.body.txtAge),
                    uf: req.body.cmbUF,
                    type: req.body.txtType,
                    photo: req.body.txtPhoto
                })
                console.log("Deu boa");

            } catch (err) {
                console.log(err);
            }
        })();
    })






//Abrindo servidor
app.listen(3001, () => console.log("Servidor aberto em localhost:3001"));