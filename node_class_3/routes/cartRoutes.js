const express = require("express");
const Router = express.Router();

Router.post("/cart",(req,res)=>{
    res.json({"message":"cart created"})
})
Router.get("/cart",(req,res)=>{
    res.json({"message":"fetch ALL cart"})
})

Router.get("/cart/:id",(req,res)=>{
    console.log("id----",req.params);
    res.json({"message":`fetch single cart details ${req.params.id}`})
})
Router.put("/cart/:id",(req,res)=>{
    res.json({"message":"update single cart"})
})
Router.put("/cart",(req,res)=>{
    res.json({"message":"update cart"})
})
Router.delete("/cart",(req,res)=>{
    res.json({"message":"delete cart"})
})

module.exports = Router;