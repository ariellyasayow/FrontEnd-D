//Destructuring & mocule
//1. Destructuring/Destrukturisasi Array & Object
let numbers = [1,2,3,4,5]; //structuring


// Destructuring Array
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];


//destruturing Array ES6
// const [num1 ,num2 ,num3 ,num4, num5] = numbers;
// console.log(num1,num2,num3,num4,num5)

//destructuring sebagian item saja
// const [, num2 ,num3, , ] = numbers;
// console.log(num2,num3);

//Destructuring dengan rest parameter
// const [num1, ...rest] = numbers;
// console.log(num1,rest)


//destructuring object
// const student= {
//     fullName : 'ariel',
//     age : 25,
//     isActive : true,
// }

// const fullName = student.fullName
// const age = 25

// const {fullName,age,isActive}= student;
// console.log(fullName, age, isActive)

//sebagian item
// const {age}= student;
// console.log(age)

//Dengan rest operator
// const {fullName, ...rest} = student;
// console.log(fullName, rest);

//Module
import { student } from './data.js';
console.log(student);

import sayGreetings from "./sayGreetings.js"
sayGreetings()