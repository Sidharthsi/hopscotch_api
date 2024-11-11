 var mongoose = require ('mongoose');
var personSchema = mongoose.Schema({
    name : String , 
    age : Number ,
    place : String
});

var student = mongoose.model('Student', personSchema);
module.exports = student ;