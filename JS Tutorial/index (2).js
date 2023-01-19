// 1. Ways to print in JS
// console.log("Hello World");
// alert("me");
// document.write("This is a document write.");

// 2. JS console API
// console.log("Hello World", 4 + 6, "Another Log");
// console.warn("This is a warning.");
// console.error("This is an error.");

// 3. JS Variables
// Variables - Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. JS Data types
// Numbers
var num1 = 455;
var num2 = 56.55;

// String
var str1 = "This is a string.";
var str2 = "This is also a string.";

// Objects
var marks = {
  Ruchir: 99,
  Roshan: 98,
  Rudra: 97
}

// Boolean
var a = true;
var b = false;
// console.log(a, b);
// console.log(b);

// Undefined
var und;
// console.log(und);

// NULL
var n = null;
// console.log(n);

/*
At a very high level there are 2 types of data types in JS:
1. Premitive data types : undefined, null, number, string, boolean, symbol
2. Reference data types : Arrays and objects.
*/

// Arrays
var arr = [1, 2, "string", 4, 5];

// function
function avg(a, b) {
  var c = (a + b) / 2;
  return c;
}
c1 = avg(40, 60);
c2 = avg(100, 200);
// console.log(c1, c2);

// Conditionals in JS
var age = 4;
if(age > 18) {
  // console.log('You are not a kid');
}
else {
  // console.log("Youa are a kid");
}

// For Loop
var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
// for(var i = 0; i < arr.length; i++) {
   // console.log(arr[i]);
// }

// arr.forEach(function(element) {
//   console.log(element);
// })

// let means temporary variable being used in a particular block
// const means a constant variable whose value is constant and cant be overwrite
// const ac = 23;
// ac++;
// ac += 1;

let j = 0;
// while(j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do{
//   console.log(arr[j]);
//   j++;
// }while(j < arr.length);

// var arr = [1, 2, 3, 4, 5, 6, 7]
// for(var i = 0; i < arr.length; i++) {
//   if(i == 2){
      // break;
      // continue;
  // }
  // console.log(arr[i]);
// }

let myArr = ["Fan", "Camera", 34, null, true];
// Array methods
// console.log(myArr);
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Ruchir");
// myArr.shift();
// myArr.unshift("Bhatia");
// const newLen = myArr.unshift("Bhatia");
// console.log(myArr);
// console.log(newLen);

// String Methods in Java
let myLovelyString = "Ruchir is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Ruchir")); //Gives the index of the first occurring in the string.
// console.log(myLovelyString.lastIndexOf("good")) //Gives the index of the last occurrance in the string.
``
// Slicing
// console.log(myLovelyString.slice(0, 3));

// Replace
// r = myLovelyString.replace("Ruchir", "Bhatia");
// console.log(myLovelyString);
// console.log(r);

// Dates
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());
