var express = require("express");
var app = express();
var PORT = 3000;


app.get("/tables/:number",(req,res)=>{

    console.log(req.params.number);

    let array=[]
    for(var i=1; i<=10 ;i++){

        var result = req.params.number * i;
        array.push(result);
    }

    res.send(array);

});

app.get("/", (request, response) => {
    console.log("simple get request");
    var array = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        }]
    response.send(array);
});


app.post("/create",(req,res)=>{

    res.send("simple post request");
});

app.put("/update",(req,res)=>{
    
    res.send("simple put request");
});

app.patch("/patchUpdate",(req,res)=>{
    
    res.send("simple patch request");
});

app.delete("/delete",(req,res)=>{
    
    res.send("simple delete request");
});


app.listen(PORT, () => {
    console.log("Server is running on 3000 port");
});

