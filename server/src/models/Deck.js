//create deck table in here 
//import datatypes 
let {db, DataTypes, Model} = require('../db/config.js')

// const { DataTypes } = require("sequelize");


let Deck = db.define('Deck', {
    //id: DataTypes.INTEGER,
    name: DataTypes.STRING, 
    xp: DataTypes.INTEGER
})


module.exports = {Deck}
