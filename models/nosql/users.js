const mongoose = require("mongoose");
var mongoose_delete = require('mongoose-delete');

const UserScheme = new mongoose.Schema(
    {
       name:{
        type: String
       },
       age:{
        type:Number
       },
       email:{
        type:String,
        unique:true
       },
       password:{
        type: String
       },
       role:{
        type:["user","admin"],
        default:"user"
       },
       

    },
    {
        timestamps:true, //registra createAt , updateAT
        versionKey:false,
    }
)
UserScheme.plugin(mongoose_delete, { overrideMethods: 'all' })
module.exports = mongoose.model("users", UserScheme)