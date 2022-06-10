const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {tracksModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");

//** obtener lista de base dados */
const getItems = 
async (req, res) => {
  try {

    
    const data =  await tracksModel.find({});
    res.send({ data });
  } catch (error) {
     handleHttpError(res,"Error_get_items", 403)
  }
 

};
//**obtener um registro */
const getItem = (req, res) => {
    const data = "hola mundo";
    res.send({ data });
  
  };
  //** inserta um registro */
const createItem = async (req, res) => {


  try {
   const body= matchedData(req)    
    const data =  await tracksModel.create(body);
       res.send({result:`${data}`})
  } catch (error) {
     handleHttpError(res,"Error_CreteItems_items", 403)
  }



};
//**atualiza registro */
const updateItem = (req, res) => {
  const data = "hola mundo";
  res.send({ data });

};
//**apaga registro */
const deleteItem = (req, res) => {
  const data = "hola mundo";
  res.send({ data });

};

module.exports = { 
getItems,
getItem, 
createItem,
updateItem,
deleteItem
};
