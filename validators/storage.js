const {check, validationResult,} = require("express-validator");
const validationResults  = require("../utils/handleValidator")



const validatorGetItem= [
    
    check("id").exists().notEmpty().isMongoId(),
    
    (req,res,next)=> validationResults(req,res,next)
    
    ]

module.exports= {validatorGetItem};