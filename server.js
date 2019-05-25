const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const produits = require('./routes/api/produits')

const app = express();

app.use(bodyParser.json());

//db config

const db =require('./config/keys').mongouURI;

//connect to mongo
mongoose.connect(db,{ useNewUrlParser: true })
.then(() => console.log('mongodb connected... '))
.catch(err => console.log(err));

app.use('/api/produits',produits)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));