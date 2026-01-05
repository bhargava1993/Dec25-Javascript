const { MongoClient } = require("mongodb");

require("dotenv").config();

const url = process.env.MONGO_URI;

const clinet = new MongoClient(url);

async function connect() {

    try {
        await clinet.connect();

        let db = await clinet.db(process.env.DB_NAME);

        return db;
    } catch (error) {
        console.log("mongodb connection error--", error);

    }


}



module.exports = connect;