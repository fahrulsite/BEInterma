module.exports = (db, DataTypes)=>{
    const Admin = db.define(
        "tb_admin",
        {
            id_admin : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
            nama : {type: DataTypes.STRING},
            username : {type: DataTypes.STRING},
            password : {type: DataTypes.STRING},
        },
        {
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
        }
    );
    return Admin;
}