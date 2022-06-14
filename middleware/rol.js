const { handleHttpError } = require("../utils/handleError");


const checkRol = (roles)=> (req,res,next)=>{
try {
    
    
            const {user} = req;
          
        const rolesByUser = user.role;
    
        const checkValueRol = roles.some((roleSingle)=> rolesByUser.includes(roleSingle)) // some() espera que alguma verificação de true, includes() tenha dentro de.
          
        if(!checkValueRol){
                handleHttpError(res,"ERROR_USER_PERMISSIONS_NOT_VALIDED", 401)
                return
            }
            next()
      
    
    
} catch (error) {
    handleHttpError(res,"ERROR_PERMISSIONS", 403)
}
}

module.exports = checkRol