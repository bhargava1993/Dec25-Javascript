const express = require("express");
const Router = express.Router();
const userContoller = require("../controller/user.contoller");

// Router.post("/",(req,res)=>{
//     res.json({"message":"user created"})
// })

// Router.post("/", userContoller.createUser);

// Router.get("/",(req,res)=>{
//     res.json({"message":"fetch ALL user"})
// })

// Router.get("/", userContoller.getUser);


// Router.get("/:id",(req,res)=>{
//     console.log("id----",req.params);
//     res.json({"message":`fetch single user details ${req.params.id}`})
// })

Router.get("/:id", userContoller.getSingleUser);

// Router.put("/",(req,res)=>{
//     res.json({"message":"update user"})
// })
// Router.put("/", userContoller.updateUser);

// Router.delete("/",(req,res)=>{
//     res.json({"message":"delete user"})
// })
// Router.delete("/", userContoller.deleteUser);


Router.route("/")
    .get(userContoller.getUser)
    .post(userContoller.createUser)
    .put(userContoller.updateUser)
    .delete(userContoller.deleteUser);

Router.route("/:id")
    .get(userContoller.getSingleUser);

module.exports = Router;
