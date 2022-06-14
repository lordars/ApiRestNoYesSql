const express = require("express");
const router = express.Router();
const {storageModel} = require("../models")

const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const fs = require("fs")

//** process.env */
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`


//** obtener lista de base dados */
const getItems = async (req, res) => {
  try {
    const data =  await storageModel.find({});
    res.send({ data });
    
  } catch (error) {
    handleHttpError(res,"Error_Delete_item", 403);
    
  }

};


//**obtener um registro */
const getItem = async (req, res) => {
  try {

    const {id} = matchedData(req);    
    const data =  await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
     handleHttpError(res,"Error_get_item", 403)
  }
  
  };


  //** inserta um registro */
const createItem = async (req, res) => {
 

try {
  const {body, file} = req

  const fileData = {
    filename: file.filename,
    url:`${PUBLIC_URL}/${file.filename}`

  }
const data =  await storageModel.create(fileData);
  res.send({data})
} catch (error) {
  handleHttpError(res,"Error_get_item", 403)
}

  


};


//**atualiza registro */
const updateItem = async (req, res) => {
  const data = "hola mundo";
  res.send({ data });

};


//**apaga registro */
const deleteItem = async (req, res) => {
  try {

    req = matchedData(req); 
     const {id} = req; 
    
    const dataFile =  await storageModel.findById(id);   //Delete deleteOne server para deletar um registro mas nos usamos soft DELETE;
    await storageModel.deleteOne({_id:id});
    const {filename} = dataFile;
     const filePath= `${MEDIA_PATH}/${filename}` //routa da foto  ** Pode ser usado soft DELETE para os arquivo mas opte por eliminação por espacio disco.
     fs.unlinkSync(filePath)

     const data = {
      filePath,
      delete: 1
     }
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
