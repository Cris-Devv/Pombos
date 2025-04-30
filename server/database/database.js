const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/pombos.sqlite'
})

module.exports = sequelize;