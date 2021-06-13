const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Admin = db.define(
    "tb_admin",
    {
        id_admin : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        nama : {type: Sequelize.STRING},
        username : {type: Sequelize.STRING},
        password : {type: Sequelize.STRING},
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = Admin;
