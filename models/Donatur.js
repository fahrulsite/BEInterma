const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Donatur = db.define(
    "tb_donatur",
    {
        id_donatur : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        nama : {type: Sequelize.STRING},
        alamat : {type: Sequelize.STRING},
        kontak : {type: Sequelize.STRING},
        photo : {type: Sequelize.STRING}, 
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,

    }
)

module.exports = Donatur;
