//tenemos que definir 1 modelo porque solo hay una entidad.

// Se tienen que definir tantos modelos como entidades existan + sus relaciones n a n (en algunos casos)

const {Sequelize, DataTypes} = require('sequelize');

const {database} = require('../database/db');


//Generar una instancia modelo

const ModeloPelicula =database.define('Pelicula',{
    title:{type: DataTypes.STRING},
    content: {type: DataTypes.STRING}

})


module.exports.ModeloPelicula=ModeloPelicula