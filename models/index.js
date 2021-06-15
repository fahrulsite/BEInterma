
const Sequelize = require("sequelize");
const sequelize = require('../config/db')

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.donasi = require("./Donasi.js")(sequelize, Sequelize);
db.donatur = require("./Donatur.js")(sequelize, Sequelize);
db.penerima = require("./Penerima.js")(sequelize, Sequelize);
db.penyaluran = require("./Penyaluran.js")(sequelize, Sequelize);

db.donatur.hasMany(db.donasi, { as: "donasi" });
db.donasi.belongsTo(db.donatur, {
  foreignKey: "id_donatur",
  as: "donatur",
});

db.penerima.hasMany(db.penyaluran, { as: "penyaluran" });
db.penyaluran.belongsTo(db.penerima, {
  foreignKey: "id_penerima",
  as: "penerima",
});

module.exports = db;