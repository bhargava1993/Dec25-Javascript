// await students.insertOne({
//     id: 1,
//     name: "Zaiba",
//     course: "Btech"
// });


// {
//     id: "1",
//     salary:"tenthousnad",
//     price:100,
//     bookname: "how to think",
//     details:{
//         authorName:"venu",
//         "stores":"banglore"
//     },
//     booksArray:["hi","100"]
// }

Mongoose:
---------

is an ORM (object relational mapping), which build on top of mongod

we need to define schema, inside schema we are going give clear instructions

{
    id: number,
    name: string,
    salary: number
}


// import mongoose from 'mongoose';

let mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const blog = mongoose.model('blog', blogSchema);





const dbURI = 'mongodb://localhost/mydatabase';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});