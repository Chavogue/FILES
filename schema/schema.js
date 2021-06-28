const mongus = require('mongoose');

const schem = mongus.Schema({
    Username : 
    {
        type: String, required:true
    },
    Password : 
    {
        type: String, required:true
    },
    Gender : 
    {
        type: String, required:true
    }
})
module.exports = mongus.model('users', schem);