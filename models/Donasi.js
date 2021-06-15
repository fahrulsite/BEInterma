module.exports = (db, DataTypes)=>{
    const Donasi = db.define(
        "tb_donasi",
        {
            id_donasi : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
            id_donatur : {type: DataTypes.INTEGER, foreignKey : true},
            tanggal : {type: DataTypes.DATEONLY},
            jumlah : {type: DataTypes.INTEGER},
            bukti : {type: DataTypes.STRING},      
        },
        {
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
    
        }
    );
    
    // Donasi.associate = (models)=>{
    //     Donasi.belongsTo(models.Donatur,{foreignKey:'id_donatur'})    
    // };

    return Donasi;
}