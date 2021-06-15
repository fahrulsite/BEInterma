module.exports = (db, DataTypes) => {
    const Donatur = db.define(
        "tb_donatur",
        {
            id_donatur : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
            nama : {type: DataTypes.STRING},
            alamat : {type: DataTypes.STRING},
            kontak : {type: DataTypes.STRING},
            photo : {type: DataTypes.STRING}, 
        },
        {
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
    
        });

        // Donatur.associate = function(models){
        //     Donatur.hasMany(models.Donasi,{foreignKey:'id_donatur'})    
        // };

        return Donatur;
}