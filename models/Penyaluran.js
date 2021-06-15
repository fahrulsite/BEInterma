module.exports = (db, DataTypes) => {
    const Penyaluran = db.define(
        "tb_penyaluran",
        {
            id_penyaluran : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
            id_penerima : {type: DataTypes.INTEGER, foreignKey : true},
            tanggal : {type: DataTypes.DATEONLY},
            jumlah : {type: DataTypes.INTEGER},
        },
        {
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
    
        });

        // Donatur.associate = function(models){
        //     Donatur.hasMany(models.Donasi,{foreignKey:'id_donatur'})    
        // };

        return Penyaluran;
}