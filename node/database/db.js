const {Sequelize} =  require("sequelize");

const database = new Sequelize('dbalejandro26','useralejandro26','AlejoSP94',{
    host: 'db4free.net',
    dialect:'mysql'
});

/*try{
    database.authenticate();
    console.log("Conectado");

}catch(error){
    console.log("Algo esta mal, revisemos")
}*/

module.exports.database=database;
