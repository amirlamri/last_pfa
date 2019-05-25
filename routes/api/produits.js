const express =require('express');
const router= express.Router();

const Produit = require('../../models/produit');

//get produit
router.get('/', (req,res) =>
{
    Produit.find()
    .sort({date_ajout: -1})
    .then(produits => res.json(produits));
});

//post produit
router.post('/', (req,res) =>
{
    const newproduit =new Produit({
        nom_produit :req.body.nom_produit,
        designation :req.body.designation,
        qte :req.body.qte,
        prix :req.body.prix,
        img :req.body.img
    });
    newproduit.save().then(produit => res.json(produit));
});


//delete produit

router.delete('/:id', (req, res) => {
    Produit.findById(req.params.id)
    .then(produit => produit.remove().then(()=> res.json({ success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports =router;