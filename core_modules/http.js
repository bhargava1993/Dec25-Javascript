const http = require("http");

const server = http.createServer((req,res)=>{
    if(res){
        console.log("sample res---",res);
        res.send("hellow world");
    }
})


server.listen(3000,()=>{
    console.log("server is running on 3000 port")
})