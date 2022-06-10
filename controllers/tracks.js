const express = require("express");
const router = express.Router();
const {tracksModel} = require("../models")

//** obtener lista de base dados */
const getItems = 
async (req, res) => {
  const data =  await tracksModel.find({});
  res.send({ data });

};
//**obtener um registro */
const getItem = (req, res) => {
    const data = "hola mundo";
    res.send({ data });
  
  };
  //** inserta um registro */
const createItem = async (req, res) => {
    const {body} = req
 const data =  await tracksModel.create(body);
    res.send({result:`${data}`})


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
