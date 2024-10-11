let {db, DataTypes, Model} = require('../db/config.js')

// const { DataTypes } = require("sequelize");


let Card = db.define('Card', {
    //id: DataTypes.INTEGER,
    name: DataTypes.STRING, 
    mojo: DataTypes.INTEGER, 
    stamina: DataTypes.INTEGER, 
    imgUrl: DataTypes.STRING
})



module.exports = {Card}