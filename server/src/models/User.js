// create your User model here
let {db, DataTypes, Model} = require('../db/config.js')



//create my user table in here 
//only column is user/ id 
//Define model
//?id field is automatically added

//don't need to put id in curlybrackets as primary keys which are ids are done automatically 
//id: DataTypes.INTEGER,

let User = db.define('User', {
    username: DataTypes.STRING
})



module.exports = {User}