// "use strict";

// var firstName="venu";

// console.log("firstName-------",firstName);

// // typeof

// console.log(typeof firstName);

// var salary= 1000.50;

// console.log( salary);


// salary = "zaiba"

// console.log(salary);




// variables:
// --------------

// varibles are used to store data, variable has name, = leftside will be variable name  = right side will be value
//  by using 3 ways we can declare variable names
// var
// let
// const

// var firstName   =   "venu";


// abcds
// 12345
// !@#$%

// "sample javacsript programs"

// 123
// 123.50

// var firstName="javascript";

// var progrminglan="HTML";

// var secondLn="css";

// var uiLan="react";

// console.log(firstName, "datatype--",typeof firstName);
// console.log(progrminglan);
// console.log(secondLn);
// console.log(uiLan);

// var salary = 1000;

// console.log(salary, "salary------", typeof salary);

// var status = false;

// console.log("status---",status, typeof status);

// var samplArray= ["javascript", "HTMl", "css", "react.js", 1000, 1000.50, true, false];

// console.log(samplArray);


// datatype
// -----------
// premitive datatype (single)-->  String, number, boolen, null, undefined, symbol

// non premitive datatype (muiltple) --> Array, object, function


// var classArray = ["venu", "sudheer", "jyothi", "zaiba",
//     70, 80, 90, 92, 400, 300, 500, 10000, 20000,
//     "se", "docter", "teacher", "kadiri", "bangalore", "ananthpur", "hyd"];

// console.log(classArray);
// console.log(typeof classArray);

// // object:  key : value --> pair
// // -------


// let classObj = {
//     name: "venu",
//     marks: 70,
//     totalMarks: 400,
//     occupation: "softEng",
//     salary: 20000
// }

// let sudheerObj = {
//     name: "sudheer",
//     marks: 80,
//     totalMarks: 500,
//     occupation: "doctor",
//     salary: 200000
// }

// let detailsArry = [
//     {
//         name: "sudheer",
//         marks: 80,
//         totalMarks: 500,
//         occupation: "doctor",
//         salary: 200000
//     },
//     {
//         name: "venu",
//         marks: 70,
//         totalMarks: 400,
//         occupation: "softEng",
//         salary: 20000
//     }
// ]

// console.log(detailsArry);
// console.log(typeof detailsArry);


// var array= ["venu", "bhargava","sudheer", "zaiba"];
//                 // 0       1       2       3

// console.log(array.length);

// let name="sudheer";
// console.log(name.length);


// let sudheerObj = {
//     name: "sudheer",
//     marks: 80,
//     "total Marks": 500,
//     occupation: "doctor",
//     salary: 200000
// }

// // console.log(sudheerObj["total Marks"]);

// console.log(Object.keys(sudheerObj).length);
// console.log(Object.values(sudheerObj));



// basic string methods
// ----------------------------
// var planguage="   jaVAscrIpt";

// console.log(planguage.toUpperCase());

// console.log(planguage.trim());

// var javascriptC="jaVAscRIPT   ";

// console.log(javascriptC);

// console.log(planguage.toLowerCase());

// console.log(planguage.trim().toLowerCase() == javascriptC.trim().toLowerCase());


// number methods
// -------------------

var totalMarks = 9.4;

// console.log(Math.round(totalMarks));

// console.log(Math.floor(totalMarks));

// console.log(Math.ceil(totalMarks));

// console.log(Math.random(10));

// console.log(Math.floor(Math.random() * 99999999));

console.log(Math.max(1, 4, 10, 3, 9, 2, 100));
console.log(Math.max(...[1, 4, 10, 3, 9, 2, 100]));

console.log(Math.min(1, 4, 10, 3, 9, 2, 100));
console.log(Math.min(...[1, 4, 10, 3, 9, 2, 100]));




