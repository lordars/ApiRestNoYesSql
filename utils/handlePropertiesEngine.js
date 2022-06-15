const ENGINE_DB = process.env.ENGINE_DB;

const getProperties = ()=>{
    const data = {
        nosql:{
            id:'_id'
        },
        mysql:{
            id:'id'
        }
    }
    return data[ENGINE_DB]
}
//realiza troca de _id para mongo e id para sql

module.exports = getProperties