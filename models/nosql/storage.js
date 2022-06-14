const mongoose = require("mongoose");
var mongoose_delete = require('mongoose-delete');

const StorageScheme= new mongoose.Schema(
    {
       url:{
        type: String
       },
       filename:{
        type: String
       },
      
       

    },
    {
        timestamps:true, //registra createAt , updateAT
        versionKey:false
    }
)
StorageScheme.plugin(mongoose_delete, { overrideMethods: 'all' })
module.exports = mongoose.model("storage", StorageScheme)