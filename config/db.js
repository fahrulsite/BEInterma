const sequelize = require ('sequelize');
const db = new sequelize("dicoba", 'root', 'Fahrul2016', {
    dialect : "mysql",
});

db.sync ({});
module.exports = db;