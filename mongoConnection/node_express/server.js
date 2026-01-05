require("dotenv").config();

const express = require("express");
const connect = require("./db");


const Port = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {

    try {
        const db = await connect();
        const students_info = await db.collection("students").find().toArray();
        res.send({ "message": "fetch users", data: students_info });

    } catch (error) {
        res.send({ "message": "fetch users error", error: error });
    }
});


app.post("/users", async (req, res) => {

    console.log(req.body);

    try {
        const db = await connect();
        const insert_data = await db.collection("students").insertOne(req.body);
         res.send({ "message": "inserted user info", data: insert_data });
    } catch (error) {
        res.send({ "message": "insert users error", error: error });
    }

});



app.listen(Port, () => {
    console.log("server is running on", Port);
});