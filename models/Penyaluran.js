const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Penyaluran = db.define(
    "tb_penyaluran",
    {
        id_penyaluran : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        id_penerima : {type: Sequelize.INTEGER},
        tanggal : {type: Sequelize.DATEONLY},
        jumlah : {type: Sequelize.INTEGER},
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,

    }
)

module.exports = Penyaluran;
