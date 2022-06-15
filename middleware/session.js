const {handleHttpError} = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const {usersModel} = require("../models/index")
const getProperties= require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()
const authMiddleware =  async  (req,res,next) =>{
try {

    if(!req.headers.authorization){
        handleHttpError(res, "NOT_TOKEN",401)
        return
    }

    const token = req.headers.authorization.split(' ').pop(); //pega so o string não o behar
    const dataToken = await verifyToken(token);
    
  
    if(!dataToken){
        handleHttpError(res, "NOT_JWT",401)
        return
    }


  /*  if(!dataToken._id){
        handleHttpError(res, "ERROR_ID_TOKEN",401)
        return
    }
*/

const query ={

    [propertiesKey.id] : dataToken[propertiesKey.id]
}

    const user = await usersModel.findOne(query) //const user = await usersModel.findById(dataToken._id) so existe findbyid em mongo mas findOne serve para os dois
    req.user = user;

 next()

} catch (error) {
    handleHttpError(res, "NOT_SESSION",401)
    return
}
}


module.exports = authMiddleware