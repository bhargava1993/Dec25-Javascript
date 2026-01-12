// fs - file system

// error first callbacks

const fs = require("fs");

// const text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
// `;
// fs.writeFile("details",text,(err,res)=>{
//     if(err){
//         console.log("error---",err);
//     }
//     console.log("res-------",res)
// });


// fs.readFile("sample1", "utf8",(err,data)=>{
//     if(err){
//         console.log("err---",err)
//     }else{
//         console.log("data-----------",data)
//     }
// });

// fs.appendFile("sample1", "nanda\n", (err,data)=>{
//     if(err) console.log(err)
// });

// fs.readFile("sample1", "utf8",(err,data)=>{
//     if(err){
//         console.log("err---",err)
//     }else{
//         console.log("data-----------",data)
//     }
// });


// fs.mkdir("uploads",{recursive: true}, (err,data)=>{
//     if(err) console.log("err---",err)
// })


// fs.writeFile("uploads/details","insidee folder created text file",(err,res)=>{
//     if(err){
//         console.log("error---",err);
//     }
//     console.log("res-------",res)
// });

// fs.readFile("uploads/details", "utf8",(err,data)=>{
//     if(err){
//         console.log("err---",err)
//     }else{
//         console.log("data-----------",data)
//     }
// });

// fs.unlink("uploads/details",(err)=>{
//      if(err) console.log(err)
// });


// fs.readdir("../core_modules",(err,data)=>{
//     if(err) console.log(err);
//     console.log("data--------",data)
// })

// strem: are useful to read large content of data


// fs.readFile("sample1", "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }  
// })

// bankaccountNum:  20189834121
// passwords:  bhargava@123

// "djshfksjd1232kj4h32lkjlk1123213"


// const crypto = require('crypto');

// Create a SHA-256 hash of a string
// const hash = crypto.createHash('sha256')
//   .update('bhargava@123')
//   .digest('hex');
// console.log('SHA-256 Hash:-----', hash);

// JWT
//pastport


// const buf = Buffer.from("Hellow world");

// console.log(buf)


// url
// os 
// path 

// file-upload:
// ----------------
// multer
// formidale

// to create excel file:
// ---------------------
// exceljs





// Date()

// console.log(new Date())

let date = new Date("2017-01-01");
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate());
console.log(date.getHours());

console.log(date.getTime());
console.log(date.getMinutes())


let array=[{date: "2017-01-02"},{date: "2026-01-10"}]

array.sort((a,b)=>{
    
})