//JavaScript Conditional & Loop
//1. javascript Conditional

//if - else
let suhu = 35
if(suhu>= 38){
    console.log("Suhu Panas");
} else {
    console.log("suhu normal");
}

//if - else if - else
//JIka nilai91 - 100 tampilkan A
//Jika nilai 81-90 tampilkan B
//Jika nilai 71-80 tampilkan C
//Jika nilai <=70 tamplkan D
let nilai = 80;
if (nilai >= 91 && nilai<=100){
    console.log("Grade A");
}else if (nilai >= 81 && nilai<=90){
    console.log("Grade B")
}else if (nilai >= 71 && nilai<=80){
    console.log("Grade C")
}else if (nilai <=70){
    console.log("Grade D")
}else{
    console.log ("out of range")
}


//switch-case (yang nd pake range rupa di atas)
let hari = 1
switch(hari){ //if hari == 1
    case 1:
        console.log("Hari Minggu");
        break;
    case 2:
        console.log("Hari senin")
        break;
    case 3:
        console.log("Hari selasa")
        break;
    case 4:
        console.log("Hari rabu")
        break;
    case 5:
        console.log("Hari kamis")
        break;
    case 6:
        console.log("Hari jumat")
        break;
    case 7:
        console.log("Hari sabtu")
        break;
}

//2. JavaScript Loop
//for loop
for (let i = 1; i<=10; i++){
    console.log(i);
}

//while loop
let a =1
while (i <=10){
    console.log(a)
    a++;
}

let b =1;
do {
    console.log(i);
    i++
}while (i<=10);

let numbers = [1,2,3,4,5]
console.log(number);
for(let i=0; i< numbers.length; i++){
    console.log(numbers[i])
}

//built-in method array
//1. forEach()
// numbers.forEach(function(value){
//     console.log(value)
// })

//2.map()
// let output = numbers.map(function(value{
//     return value + 2;
// }))

// console.log(output);

//3. filter()
// let output= numbers.filter(function(value){
//     return value+ 2;
// })
// console.log(output)

//4. find(), mencari elemen yang palin gdepan (dpe output cuman 1)
let output = numbers.find(function(value){
    return value + 2;
})
console.log(output)