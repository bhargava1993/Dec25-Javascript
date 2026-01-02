const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/userRoutes");
const productRouters = require("./routes/productRouters");
const cartRoutes = require("./routes/cartRoutes");
const sample = require("./middlewars/authentication");

app.use(express.json());
// app.use(sample);


app.use("/user",userRoutes);
app.use("/products",productRouters);
app.use("/",cartRoutes);



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});





// server.js
// routes
// middleleware - pass
// controller - beginesslogic
// mogodb - quires
// res
