


const handleHttpError = (res, message="deu mal", code = 403)=>{

res.status(code);
res.send({error:message})

}

module.exports ={handleHttpError}