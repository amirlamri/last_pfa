const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//create schema
const ProduitSchema = new Schema({
    id: Schema.Types.ObjectId,
    nom_produit : {
        type:String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    qte:{
        type:Number,
        required: true 
    },
    prix:{
        type:Number,
        required: true 
    },
    img:{
        type:String,
        required: true 
    },
    date_ajout:{
        type:Date,
        default: Date.now 
    }

    
});
module.exports = Produit = mongoose.model('produit',ProduitSchema);