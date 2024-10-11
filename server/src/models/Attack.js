let {db, DataTypes, Model} = require('../db/config.js')

// const { DataTypes } = require("sequelize");


let Attack = db.define('Attack', {
    //id: DataTypes.INTEGER,
    title: DataTypes.STRING, 
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
})


module.exports = {Attack}