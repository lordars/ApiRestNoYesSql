const express = require("express")
const router = express.Router();
const  uploadMiddleware = require("../utils/handleStorage")
const {getItems,getItem,createItem,updateItem,deleteItem} = require("../controllers/storage")
const {validatorGetItem} = require ("../validators/storage")






router.get("/",getItems)
router.get("/:id", validatorGetItem,getItem)
router.post("/",uploadMiddleware.single("myfile"), createItem)
//router.put("/:id",updateItem)
router.delete("/:id", validatorGetItem, deleteItem)





module.exports = router