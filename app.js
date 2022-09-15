// configuration de l'environnement avec les lib dotenv et cross-env
require('dotenv').config({path: './config/.env'});

// on extrait les variables d'environnement de process.env
const {MESSAGE, PORT, DB_CONNECTION} = process.env;

// import du module mongoose
const mongoose = require('mongoose');

//création du serveur express
const express = require('express');

// import de la librairie qui gère les erreurs async await
require('express-async-errors');

//import du module router (->routes/index.js)
const router = require('./routes');

//création du serveur. On le stocke dans une variable
const app = express();


//! décommenter les 2 lignes ci-dessous
const cors = require('cors')
app.use(cors())

//! penser à rajouter la librairie CORS


//notre premier middleware pour permettre à notre serveur de lire les objets .json en post
app.use(express.json());


// interception de chaque requête AVANT d'utiliser le middleware qui dispatch vers nos routes
app.use(async(req, res, next)=>{
    await mongoose.connect(DB_CONNECTION);
    console.log('connection réussie');
    next();
})

//On indique à notre serveur, qu'à l'arrivée sur la route /api, il doit utiliser notre module router
app.use('/api', router);

//On met le server sur "écoute" sur le port précisé dans la variable d'environnement PORT
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}, ${MESSAGE}`);
})


