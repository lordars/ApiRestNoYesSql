const express = require("express")
const router = express.Router();
const fs = require("fs")

const removeExtension = (filename)=>{
    //Todo tracks.js  [tracks , js]
    return filename.split(".").shift();
}

const PATH_ROUTES= __dirname;
fs.readdirSync(PATH_ROUTES).filter((file)=>{ // Todo users, storage, tracks
const name= removeExtension(file)
if(name !== "index"){
    router.use(`/${name}`, require(`./${file}`)); //todo http://localhost:3000/api/tracks
}


});

module.exports =router;