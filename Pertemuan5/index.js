//IIFE & Callback Function 
//1. IIFE (Immedialety Invoked Funcrion Expression) 
//        FUNGSI YANG LANGSUNG DIJALANKAN/DIPANGGIL
//  self-executing anonymous function

// (function () {
//     console.log("Hello World");
// })();

//IIFE with parameter & return value
// (function(fullName){
//     console.log("Hello " + fullName);
// })("ariel");

// let output = (function(fullName){
//     return "Hello " + fullName;
// })("ariel");
// console.log(output);

//2. Callback Function
//function passed into another function as an argument
// function greetings(callback){
//     callback();
// }

//callback function must be an anonymous function
// greetings(function (){
//     console.log("Hello Callback");
// });

//Callback with parameter & return value
// function greetings(callback){
//     callback("Ariel");
// }

// //callback function must be an anonymous function
// greetings(function (fullName){
//     console.log("Hello " + fullName);
// });

// function greetings(callback){
//     let result = callback("ariel");
//     console.log(result);
// }

// //callback function must be an anonymous function
// greetings(function (fullName){
//     return "Hello " + fullName;
// });

// function greetings(callback){
//     let result = callback("ariel");
//     return result;
// }

// //callback function must be an anonymous function
// let output = greetings(function (fullName){
//     return "Hello " + fullName;
// });

// console.log(output)




