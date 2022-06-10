const {check, validationResult,} = require("express-validator");
const validationResults  = require("../utils/handleValidator")

const validatorCreateItem= [
check("name").exists().notEmpty().isLength({min:5 , max:90}),
check("album").exists().notEmpty(),
check("cover").exists().notEmpty(),
check("artist").exists().notEmpty(),
check("artist.name").exists().notEmpty(),
check("artist.nickname").exists().notEmpty(),
check("artist.nationality").exists().notEmpty(),
check("duration").exists().notEmpty(),
check("duration.start").exists().notEmpty(),
check("duration.end").exists().notEmpty(),
check("mediaId").exists().notEmpty().isMongoId(),

(req,res,next)=> validationResults(req,res,next)

]


module.exports= {validatorCreateItem};