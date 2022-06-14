const {handleHttpError} = require("../utils/handleError")



const authMiddleware = (req,res,next) =>{
try {

    if(!req.headers.authorization){
        handleHttpError(res, "NOT_TOKEN",401)
        return
    }

    const token = req.headers.authorization.split(" ").pop();/pega so o string não o behar
    



} catch (error) {
    handleHttpError(res, "NOT_SESSION",401)
    return
}
}


module.exports = {authMiddleware}