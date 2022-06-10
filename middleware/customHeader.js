const  customHeader =(req,res,next)=>{

try {
    const apikey = req.headers.apikey
if(apikey === "pepe"){
    next()
}else{
    res.status(403)
    res.send({error:"apikey not fund"})
}

} catch (error) {
    res.status(403)
    res.send({error: "error not send  custom header auth"})
}


    

}


module.exports = customHeader;