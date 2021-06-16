const sequelize = require ('sequelize');
const db = new sequelize({
    host: "db.infiniteuny.id",
    port: "3306",
    database: "u1005343_fahrulsite",
    username: "u1005343_fahrulsite",
    password: "Fahrul2016",
    dialect : "mysql",
});

db.sync ({});
module.exports = db;