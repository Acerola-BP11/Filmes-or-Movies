const { DataTypes } = require("sequelize");
const sequelize = require('../banco');

const Serie = sequelize.define('Serie', {
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
    },
    episodios:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{timestamps: false})

Serie.sync()

module.exports = Serie