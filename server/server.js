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

    app.get('/pombos', (req, res, next) => {
        (async () => {
            try{
                const connect = await database.sync();
                console.log('Conectado com sucesso!');

                const pomboRead = await Pombo.findAll();
                res.json(pomboRead);
                console.log('Pombos lidos com sucesso')
            } catch(err){
                console.log(err);
            }
        })();
    })

    app.get('/get_pombo/:id', (req, res, next) => {
        (async () => {
            try{
                // const id = req.params.id;
                const connect = await database.sync();
                console.log('Conectado com sucesso!');

                const pomboDetails = await Pombo.findAll({where: {id: req.params.id}});
                res.json(pomboDetails);
                console.log('Pombos lidos com sucesso')
            } catch(err){
                console.log(err);
            }
        })();
    })
    
    app.post('/add_pombo', (req, res, next) => {
        (async () => {
            try {
                const connect = await database.sync();
                console.log('Conectado com sucesso!');

                const pomboCreate = await Pombo.create({
                    name: req.body.txtName,
                    age: parseInt(req.body.txtAge),
                    uf: req.body.cmbUF,
                    type: req.body.txtType,
                    photo: req.body.txtPhoto
                })
                console.log("Pombo adicionado com sucesso");

            } catch (err) {
                console.log(err);
            }
        })();
    })

    app.post('/update_pombo/:id', (req, res, next) => {
        (async () => {
            try {
                const connect = await database.sync();
                console.log('Conectado com sucesso!');

                const {id} = req.params;
                const {name, age, uf, type, photo} = req.body;
                const pomboUpdate = await Pombo.update(
                    {name, age, uf, type, photo}, 
                    {where: {id: id,},
                });
                console.log("Pombo atualizado com sucesso!");
            } catch (err) {
                console.log(err);
            }
        })();
    })






//Abrindo servidor
app.listen(3001, () => console.log("Servidor aberto em localhost:3001"));