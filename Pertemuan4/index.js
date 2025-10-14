//JavaScript Function --> bagian dari kode program yang dijalankan untuk tugas tertentu (menerima input dan mengeluarkan output)
//ada 2 cara membuat fungsi
//1. function declaration
// function greetings(){
//     console.log("Hello World")
// }
// greetings() // call function

//2. function expression
// const greetings2 = function (){
//     console.log("Hello World")
// }

// greetings2()


//Function with input(argument dan parameter) 
// and output (return value)

//cara 1
//function hoisting --> cmn blh pake di cara 1 (dpe output/innput boleh taruh di atas)
//                 parameter
// function greetings(fullName){
//     return "Hello " + fullName
// }

//         Argument
// let output = greetings("Ariellya Sayow")
// console.log(output)

//cara 2 
// const greetings2 = function(fullName){
//     return "Hello " + fullName
// }

// let output2 = greetings2("awriel")
// console.log(output2)


//Global, Local, Block scope variable
// let x = 10 //Global variable
// console.log(x) //10
// function func1() {
//     let y = 20 //Local Variable
//     console.log(x)//10
//     console.log(y)
//     if(true){
//         let z = 30 //block
//         console.log(x) //10
//         console.log(y) //20
//         console.log(z) //30
//     }
//     // console.log(z) //ERROR (block)--> semua yang ada di dalam {} disebut block
// }
// func1()
// console.log(y)// ERROR 




//Mini Exercise
//Modifikasi mini exercise terakhir tentang BMI
//dengan menggunakan fungsi dimana berat dan tinggi sebagai argument( input) dan BMI sebagai output
function BMI(berat,tinggi){
    return berat/(tinggi * tinggi)
}
let output = BMI (45 , 1.65)
let n = output > 25 ? "BMI anda adalah "+output+", kategori kelebihan berat badan" : "BMI anda adalah "+output+" , katergori normal"
console.log(n)

function BMI(berat,tinggi){
    let hasil = berat/(tinggi * tinggi)
    return hasil > 25 ? "BMI anda adalah "+hasil+", kategori kelebihan berat badan" : "BMI anda adalah "+hasil+" , katergori normal"
}
let a = BMI (45 , 1.65)
console.log(a)






