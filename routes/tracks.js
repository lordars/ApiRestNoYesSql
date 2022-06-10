const express = require("express")
const router = express.Router();
const {getItems,getItem,createItem,updateItem,deleteItem} = require("../controllers/tracks")
const {validatorCreateItem} = require ("../validators/tracks")

router.get("/",getItems)
router.get("/",getItem)
router.post("/",validatorCreateItem,createItem)
router.get("/",updateItem)
router.delete("/",deleteItem)







module.exports = router