var express = require("express");
var app = express();
var PORT = 3000;



app.use(express.json());



function sample(req,res,next){
    console.log("sample middle ware", req.params);
    if(req.params.id !== "123"){
       return res.status(403).send({
            message: "Access denied"
        });
    }
     next();
}



app.get("/user/:id",   sample,    (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // console.log(req.query.id);
    // console.log(req.query.name);
    // console.log(req.query.email);
    console.log(req.body);
    console.log(req.query);
    res.send({ mesage: "get user info", data:req.body });
});

app.get("/user/id/:id", (req, res) => {
    console.log(req.params);
    res.send({ mesage: "get user info" });
});

app.get("/user/name/:name", (req, res) => {
    console.log(req.params);
    res.send({ mesage: "get user info" });
});

app.get("/user/email/:email", (req, res) => {
    console.log(req.params);
    res.send({ mesage: "get user info" });
});

app.post("/user", (req, res) => {
    res.send({ mesage: "Post user info" });
})

app.put("/user", (req, res) => {
    res.send({ mesage: "put user info" });
});

app.delete("/user", (req, res) => {
    res.send({ mesage: "delete user info" });
});


function login(req,res,next){
    console.log(req.query);

    if(req.query.email === "venu@gmail.com" && req.query.password ==="12345"){
        next();
    }else{
        return res.status(404).send({
            message: "Access denied"
        });
    }
    
}

app.get("/login", login, (req,res)=>{
    res.send({message:"user has logedin"});
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});



