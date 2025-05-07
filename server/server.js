//Importando dependências do projeto
    const express = require('express');
    const cors = require('cors');
    const database = require('./database/database');
    const Pombo = require('./models/Pombo');
    const path = require('path');

//Configurando o servidor
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, "public")));

//Rotas    

//Rota Create
    app.post('/add_pombo', (req, res, next) => {
        (async () => {
            try {
                const connect = await database.sync();
                console.log('Conectado com sucesso!');

                const pomboCreate = await Pombo.create({
                    name: req.body.txtName,
                    age: parseInt(req.body.txtAge),
                    uf: req.body.cmbUF,
                    type: req.body.txtType
                    // photo: req.body.txtPhoto
                })
                console.log("Pombo adicionado com sucesso");

            } catch (err) {
                console.log(err);
            }
        })();
    })

//Rota Read
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

//Rota Read por ID
    app.get('/get_pombo/:id', (req, res, next) => {
        (async () => {
            try{
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

//Rota Update
    app.put('/update_pombo/:id', (req, res, next) => {
        (async () => {
            try {
                const connect = await database.sync();
                console.log('Conectado com sucesso!');

                const pomboUpdate = await Pombo.update(
                    {name: req.body.txtName, 
                    age: req.body.txtAge, 
                    uf: req.body.cmbUF, 
                    type: req.body.txtType}, 
                    // photo: req.body.txtPhoto 
                    {where: {id: req.params.id}
                });
                console.log("Pombo atualizado com sucesso!");
            } catch (err) {
                console.log(err);
            }
        })();
    })

//Rota Delete
    app.delete('/delete/:id', (req, res, next) => {
        (async() => {
            const connect = await database.sync();
            console.log('Conectado com sucesso!');

            const pomboDelete = await Pombo.destroy({where: {id: req.params.id}})
            console.log("Pombo deletado com sucesso!")
        })();
    })






//Abrindo servidor
app.listen(3001, () => console.log("Servidor aberto em localhost:3001"));