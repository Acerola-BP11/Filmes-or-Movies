const path = require('path')
const { Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','iteflix.sqlite')
})

module.exports = sequelize