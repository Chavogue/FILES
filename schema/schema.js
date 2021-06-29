const mongus = require('mongoose');

const schem = mongus.Schema({
    FirstName: 
    {
        type: String, required:true
    },
    SecondName:  
    {
        type: String, required:true
    },
    Gender: 
    {
        type: String, required:true
    },
    City: 
    {
        type: String, required:true
    }
})
module.exports = mongus.model('users', schem);
