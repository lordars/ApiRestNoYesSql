require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo")
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static("storage"))
const port = process.env.PORT|| 3001;

/***invocando routers */
app.use("/api",require("./routes"))

app.listen(port, ()=>{
    console.log(`Teu api esta rodando no port ${port}`);
})


dbConnect();