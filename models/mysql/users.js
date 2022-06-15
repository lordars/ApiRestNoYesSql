const {DataTypes} = require("sequelize");
const {sequelize} = require("../../config/mysql");


const Users = sequelize.define(
   "users", 
   {
       name:{
        type: DataTypes.STRING,
        allowNull: false,
       },
       age:{
        type: DataTypes.NUMBER
       },
       email:{
        type:DataTypes.STRING,
        unique:true
       },
       password:{
        type: DataTypes.STRING,
        select: false,
       },
       role:{
        type: DataTypes.ENUM(["user","admin"]),
     
       }   
    },
    {
        timestamps:true, //registra createAt , updateAT
     
    }
)

module.exports = Users;