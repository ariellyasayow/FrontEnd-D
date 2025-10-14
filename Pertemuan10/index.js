//Rest Psrameter & Spread Operator
//1. Rest Parameter
//rest parameter > gabung parameter jadi satu
//berfungsi menghandle atau menyimpan parameter yang banyak
const funct1 = (param1,param2,param3, param4,param5)=> {
    console.log(param1,param2,param3,param4,param5);
};

funct1(1,2,3,4,5);//tidak efisien

//a. rest parameter> bertipe data array
const funct2 = (...rest)=> {
    console.log(rest);
};

funct2(1,2,3,4,5);

//Mini Exercise
//buat fungsi yang dapat menjumlahkan semua nilai pada argument
const fun = (...rest)=>{
    let hasil = 0
    rest.forEach((item)=>(hasil += item))
    console.log(hasil)
    
}

fun(1,2,1,2);


//2. Spread Operator
//berkaitan dengan array dan object
const numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

//Kegunaan spread operator pada array
//1. untuk duplikasi array
const numbers2 = [...numbers];
console.log(numbers2);

//2. untuk menggabungkan array
let arr1 = [1,2,3,4]
let arr2 = [5,6,7]
let arr3 = [8,9,0]

let combinedArr1 = arr1.concat(arr2,arr3)
console.log(combinedArr1)

let combinedArr2 = [...arr1,...arr2,...arr3]
console.log(combinedArr2)

//Kegunaan spread operator pada object
//1. duplikasi object
const student1 = {
    fullName : 'ariel',
    status: 'active',
};

const student2 = {...student1, address: 'Manado'}
console.log(student2)

//2. menggabungkan object
let obj1 = {1: 1, b: 2};
let obj2 = {c: 3, d: 4};

let combinedObject = {...obj1,...obj2}
console.log(combinedObject)