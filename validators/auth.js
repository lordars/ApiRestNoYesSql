const {check, validationResult,} = require("express-validator");
const validationResults  = require("../utils/handleValidator")

const validatorRegister= [
check("name").exists().notEmpty().isLength({min:3 , max:99}),
check("age").exists().notEmpty().isNumeric(),
check("password").exists().notEmpty().isLength({min:3 , max:99}),
check("email").exists().notEmpty().isEmail(),


(req,res,next)=> validationResults(req,res,next)

]


const validatorLogin =[
 
    check("password").exists().notEmpty().isLength({min:3 , max:99}),
    check("email").exists().notEmpty().isEmail(),
    
    
    (req,res,next)=> validationResults(req,res,next)
    
    ]

module.exports= {validatorRegister,validatorLogin};