const { DataTypes } = require("sequelize")
const sequelize = require('../banco')

const Filme = sequelize.define('Filme', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(120),
        allowNull:false
    },
    diretor:{
        type: DataTypes.STRING(120),
        allowNull: false
    }
}, 
{timestamps: false})

Filme.sync()

module.exports = Filme