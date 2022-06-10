const express = require("express");
const router = express.Router();
const {storageModel} = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL;
//** obtener lista de base dados */
const getItems = 
async (req, res) => {
  const data =  await storageModel.find({});
  res.send({ data });

};
//**obtener um registro */
const getItem = (req, res) => {
    const data = "hola mundo";
    res.send({ data });
  
  };
  //** inserta um registro */
const createItem = async (req, res) => {
 
    const {body, file} = req
    const fileData = {
      filename: file.filename,
      url:`${PUBLIC_URL}/${file.filename}`

    }
 const data =  await storageModel.create(body);
    res.send({file})


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
