const express = require("express");
const router = express.Router();
const {validatorLogin,validatorRegister} = require("../validators/auth")
const {registerCtrl, loginCtrl} = require("../controllers/auth")

/**
 * criar auth
 */



router.post("/register", validatorRegister,registerCtrl )


router.post("/login", validatorLogin, loginCtrl)






module.exports = router