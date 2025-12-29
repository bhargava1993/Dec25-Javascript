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

// var totalMarks = 9.4;

// console.log(Math.round(totalMarks));

// console.log(Math.floor(totalMarks));

// console.log(Math.ceil(totalMarks));

// console.log(Math.random(10));

// console.log(Math.floor(Math.random() * 99999999));

// console.log(Math.max(1, 4, 10, 3, 9, 2, 100));
// console.log(Math.max(...[1, 4, 10, 3, 9, 2, 100]));

// console.log(Math.min(1, 4, 10, 3, 9, 2, 100));
// console.log(Math.min(...[1, 4, 10, 3, 9, 2, 100]));


// var empName = null;

// console.log(empName);




// 10th class 

// pass - success - true
// fail - failure  - false

// bussiness 

// success - true
// failure - false

// true
// false


// conditional statements:

// looping statements


// conditional statements:

// var degree = 76

// console.log(degree > 75);

// if (degree > 75) {
//     console.log("i got laptop");
// } else {
//     console.log("i didn't get laptop");
// }

// var emPname = "bhargava";

// console.log(emPname === "venu");

// var number = 18;

// console.log(number % 2);
// console.log(number % 2 == 0);

// if (number % 2 == 0) {
//     console.log("this number is even number");
// } else {
//     console.log("this number is odd number");
// }


// =    ---> assigment operator
// ==  --> comparision operator
// ===  --> strict comparision operator

// 10 == 10

// console.log("10" == 10);

// console.log("10" === 10);

// console.log(10 === 10);


// var salary = 16001;

// morethan 
// lessthan
// equal

// if (salary > 10000) {
//     console.log("morethan " + 10000);

//     if (salary < 15000) {
//         console.log("lessthan " + 15000);
//     } else {
//         console.log("morethan " + 15000);
//     }

// } else if (salary < 10000) {
//     console.log("lessThan " + salary);
// } else if (salary === 10000) {
//     console.log("equal " + salary);
// }


// looping statement:
// ----------------------


// ++   = increment = 10+1, 100+1, 45+1
// --   = decreament = 10-1, 100-1, 45-1

// var number= 100;

// number++;

// number--;

// console.log(number);


// 0 - 10;

// 0,1,2,3,4,5,6,7,8,9,10

// ++

// 0 <= 10

// start
// end

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 10,9,8,7,6,5,4,3,2,1,0

// 10 - 0

// --

// 10 >= 0

// for (var i = 10; i >= 0; i--) {
//     console.log(i);
// }

// var array = ["venu", "bhargava", "sudheer", "zaiba", "jyothi"];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// console.log(array.length);

// for(var i=0; i < array.length;i++){
//     console.log(i);
//     console.log(array[i]);
// }

// reverse an array:
// var array = ["venu", "bhargava", "sudheer", "zaiba", "jyothi"];


// 10,9,8,7,6,5,4,3,2,1,0

// let reverseArray = [];

// for (var i = array.length - 1; i >= 0; i--) {
//     // console.log(i);
//     // console.log(array[i]);
//     reverseArray.push(array[i]);
// }

// console.log(reverseArray);



// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10 = 20

// for(var i=1; i <= 10 ;i++){
//     // console.log( "2", "*" , i, "=",   2 * i);
//     console.log(`2 * ${i} = ${2* i}`);
// }


// 1 - 100;

// (number%2 == 0)
// (number%2 == 1)

for (var i = 1; i <= 100; i++) {

    if (i % 2 == 0) {

    } else {
        console.log(i);
    }

}

