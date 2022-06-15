require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo")
const {dbConnectMySql} = require("./config/mysql")
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static("storage"))
const morganBody = require("morgan-body")
const {loggerStream} = require("./utils/handleLogger")
const ENGINE_DB = process.env.ENGINE_DB

const port = process.env.PORT|| 3001;




morganBody(app,{
  
noColors:true,
stream : loggerStream,
skip: function(req,res){
    return res.statusCode < 400 //TODO 2xx, 3xx
}
})


/***invocando routers */
app.use("/api",require("./routes"))

app.listen(port, ()=>{
    console.log(`Teu api esta rodando no port ${port}`);
})


ENGINE_DB === 'nosql'? dbConnectNoSql() : dbConnectMySql();
  