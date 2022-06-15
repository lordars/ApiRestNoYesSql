const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {tracksModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");


//** obtener lista de base dados */
const getItems = 
async (req, res) => {
  try {

    const user= req.user;
    
    const data =  await tracksModel.findALLData({});
    res.send({ data , user });
  } catch (error) {
     handleHttpError(res,"Error_get_items", 403)
  }
 

};
//**obtener um registro */
const getItem =  async (req, res) => {
  try {

    const {id} = matchedData(req);    
    const data =  await tracksModel.findOneData(id);
    res.send({ data });
  } catch (error) {
     handleHttpError(res,"Error_get_item", 403)
  }
 
  };
  //** inserta um registro */
const createItem = async (req, res) => {


  try {
   const body= matchedData(req)    
    const data =  await tracksModel.create(body);
       res.send({data})
  } catch (error) {
    console.log(error)
     handleHttpError(res,"Error_CreteItems_items", 403)
  }



};
//**atualiza registro */
const updateItem = async (req, res) => {
  try {
    const {id, ...body}= matchedData(req)    
    
     const data =  await tracksModel.findOneAndUpdate(id,body);
        res.send({result:`${data}`})
   } catch (error) {
      handleHttpError(res,"Error_CreteItems_items", 403)
   }
};
//**apaga registro */
const deleteItem = async (req, res) => {
  try {

   req = matchedData(req); 
    const {id} = req; 

    const data =  await tracksModel.delete({_id:id});//Delete deleteOne server para deletar um registro mas nos usamos soft DELETE;
    res.send({ data });
  } catch (error) {
     handleHttpError(res,"Error_Delete_item", 403)
  }
};

module.exports = { 
getItems,
getItem, 
createItem,
updateItem,
deleteItem
};
