const mongose = require("mongoose");

const dbConnect = ()=>{
const DB_URI_MONGO = process.env.DB_URI_MONGO;
mongose.connect(DB_URI_MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
(err,res)=>{
    if(!err){
        console.log("***** Conectado em Mongo*******");
    }else{
        console.log(`*****eror conection ${err}****`);
    }
}
)
    
}

module.exports = dbConnect;