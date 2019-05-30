const express =require('express');
const router= express.Router();

const Client = require('../../models/Client');




    router.post('/',(req,res)=>
    {
        const {body} = req;
        const {
            ClientFirstName,
            ClientLastName,
            ClientEmail,
            ClientImage,
            ClientPassword,
            ClientAddress,
            ClientCountry,
            ClientCity,
        } =body;


        if(!ClientFirstName){
            return res.send({
                   success : false,
                   message : 'error: missing firstName'
               }); 
         }
         // save Client 
         const NewClient = new Client();
         
         NewClient.ClientFirstName = ClientFirstName ;
         NewClient.ClientLastName = ClientLastName ;
         NewClient.ClientImage = ClientImage ;
         NewClient.ClientPassword = ClientPassword;
         NewClient.ClientAddress = ClientAddress;
         NewClient.ClientCity = ClientCity;
         NewClient.ClientCountry = ClientCountry;
         NewClient.ClientEmail = ClientEmail;
         NewClient.save().then(Client => res.json(Client));

  


});


module.exports = router;