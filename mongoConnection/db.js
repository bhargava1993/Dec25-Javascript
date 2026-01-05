// mongodb

// npm install mongodb
// npm i mongodb

let { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

let client = new MongoClient(uri);

async function connection() {
    try {

        await client.connect();
        console.log("mongdb connection established");

        let db = await client.db("school");
        console.log("db connection---", db.databaseName);

        let students = await db.createCollection("students");
        console.log("students collection created--",students.collectionName);

        await students.insertOne({
            id:1,
            name:"Zaiba",
            course:"Btech"
        });

        let students_info =await students.find().toArray();
        console.log("students_info----",students_info);

        //  await students.deleteMany();

    } catch (error) {
        console.log(`mongodb connection error ${error}`);
    } finally {
        console.log("mongodb finally stop");
    }

}

connection();

// module.exports = {connection}