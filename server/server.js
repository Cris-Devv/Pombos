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

                const userRead = await Pombo.findAll();
                res.json(userRead);
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

                const userDetails = await Pombo.findAll({where: {id: req.params.id}});
                res.json(userDetails);
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

                const userCreate = await Pombo.create({
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






//Abrindo servidor
app.listen(3001, () => console.log("Servidor aberto em localhost:3001"));