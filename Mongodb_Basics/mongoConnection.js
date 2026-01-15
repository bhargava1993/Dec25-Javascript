// npm install mongodb

let { MongoClient } = require("mongodb");
const { connect } = require("node:http2");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function connection() {
    try {
        await client.connect();
        console.log("MongoDB connected");

        const db = client.db("sample");
        console.log("db connected----", db.databaseName);

        const users = db.collection("users");
        console.log("users---------", users.collectionName);

        const insertResult = await users.insertOne({
            name: "John",
            age: 25
        });
        console.log("Inserted ID:", insertResult.insertedId);

        const allUsers = await users.find().toArray();
        console.log("All Users:", allUsers);

        // UPDATE ONE
        const updateResult = await users.updateOne(
            { name: "John" },               // filter
            { $set: { age: 26 } }            // update
        );
        console.log("Updated count:", updateResult.modifiedCount);

        // FETCH UPDATED DATA
        const updatedUser = await users.findOne({ name: "John" });
        console.log("Updated User:", updatedUser);

    } catch (error) {
        console.log("mongo error---", error);

    } finally {
        await client.close();
    }
}

connection();