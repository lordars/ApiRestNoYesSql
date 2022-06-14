const mongoose = require("mongoose");
var mongoose_delete = require('mongoose-delete');

const TracksScheme= new mongoose.Schema(
    {
       name:{
        type: String
       },
       album:{
        type:String
       },
       cover:{
        type:String,
        validate:{
            validator: (req)=>{
                return true;
            },
            message: "ERROR_URL",
        }
       },
       artist:{
        name:{type:String},
        nickname:{type:String},
        nationality:{type:String},

       },
       duration:{
        start:{
            type:Number,
        },
        end:{
            type:Number,
        }
       },
       mediaId:{
        type:mongoose.Types.ObjectId,
       },
       

    },
    {
        timestamps:true, //registra createAt , updateAT
        versionKey:false,
    }
);

TracksScheme.plugin(mongoose_delete, { overrideMethods: 'all' })
module.exports = mongoose.model("tracks", TracksScheme)