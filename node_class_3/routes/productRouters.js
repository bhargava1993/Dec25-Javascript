const express = require("express");
const Router = express.Router();

Router.post("/",(req,res)=>{
    res.json({"message":"products created"})
})
Router.get("/",(req,res)=>{
    res.json({"message":"fetch ALL products"})
})

Router.get("/:id",(req,res)=>{
    console.log("id----",req.params);
    res.json({"message":`fetch single products details ${req.params.id}`})
})
Router.put("/:id",(req,res)=>{
    res.json({"message":"update single products"})
})
Router.put("/",(req,res)=>{
    res.json({"message":"update products"})
})
Router.delete("/",(req,res)=>{
    res.json({"message":"delete products"})
})

module.exports = Router;