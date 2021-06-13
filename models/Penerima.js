const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Penerima = db.define(
    "tb_penerima",
    {
        id_penerima : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        nama : {type: Sequelize.STRING},
        alamat : {type: Sequelize.STRING},
        kontak : {type: Sequelize.STRING},
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = Penerima;
