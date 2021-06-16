const sequelize = require ('sequelize');
const db = new sequelize({
    host: "freedb.tech",
    port: "3306",
    database: "freedbtech_interma",
    username: "freedbtech_interma",
    password: "mantapjiwa",
    dialect : "mysql",
});

db.sync ({});
module.exports = db;