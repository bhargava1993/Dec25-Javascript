function sample(req,res,next){
    console.log("sample middle ware", req.params);
    if(req.params.password !== "123"){
       return res.status(403).send({
            message: "Access denied"
        });
    }
     next();
}

module.exports = sample;