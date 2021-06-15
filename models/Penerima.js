module.exports = (db, DataTypes) => {
    const Penerima = db.define(
        "tb_penerima",
        {
            id_penerima : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
            nama : {type: DataTypes.STRING},
            alamat : {type: DataTypes.STRING},
            kontak : {type: DataTypes.STRING},
        },
        {
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
        });

        // Donatur.associate = function(models){
        //     Donatur.hasMany(models.Donasi,{foreignKey:'id_donatur'})    
        // };

        return Penerima;
}