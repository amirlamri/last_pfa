const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//create schema
const ClientSchema = new Schema({
    id: Schema.Types.ObjectId,
    ClientFirstName : {
        type:String,
        required: true
    },
    ClientLastName:{
        type:String,
        required: true
    },
    ClientImage:{
        type:String,
        required: true 
    },
    ClientPassword:{
        type:String,
        required: true 
    },
    ClientAddress:{
        type:String,
        required: true 
    },
    ClientCountry:{
        type:String,
        required: true 
    },
    ClientCity:{
        type:String,
        required: true 
    },
    ClientEmail : {
        type:String,
        required: true
    }

    
});
module.exports = Client = mongoose.model('Client',ClientSchema);