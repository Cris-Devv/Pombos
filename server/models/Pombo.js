//Importando dependências
    const Sequelize = require('sequelize');
    const database = require('../database/database');

//Criação do modelo
    const Pombo = database.define('pombo', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        uf: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: true
        },
        photo: {
            type: Sequelize.BLOB,
            allowNull: true
        }
    })

module.exports = Pombo;