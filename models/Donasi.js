const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Donasi = db.define(
    "tb_donasi",
    {
        id_donasi : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        id_donatur : {type: Sequelize.INTEGER},
        tanggal : {type: Sequelize.DATEONLY},
        jumlah : {type: Sequelize.INTEGER},
        bukti : {type: Sequelize.STRING},
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,

    }
)

module.exports = Donasi;
