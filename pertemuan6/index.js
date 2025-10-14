//Array & object in JavaScrtipt
//1. Array
//Cara mendeklarasikan array
//cara 1. Array Literal
let students = ["Ariel", "putri", "Sayow", "bob"];
let ariel = ["Ariel", 19, true, [80, 90,100]];


//Cara 2. Kata kunci "new"
let employees = new Array("Ariel", "putri", "Sayow", "Bob")

//menampilkan semua elemt array sekaligus
console.log(students);
//Menampilkan element array berdasarkan index
console.log(students[2]);
//Merubah element array berdasarkan index
ariel[2]= false;
console.log(ariel);
//menampilkna element terakhir didalam array
console.log(students.length);    //panjang array
console.log(students[students.length - 1]);

//Array Method
let array = [1,2,3, "Hello", false, true];

//1. toString() -- Merubah array menjadi string
array.toString();
console.log(array.toString());

//2. join()
console.log(array.join("-"));
console.log(array.join(" "));

//3. pop() - menghapus element yang paling terakhir
array.pop();
console.log(array);

//4. push() - tambah element terakhir
array.push("selamat sore")
console.log(array)

//5. shift() - hapus element pertama
array.shift()
console.log(array)

//6.unshift() - tambah element pertama
array.unshift("selamat sore")
console.log(array)

//7. splice() - tambah/hapus element di tengah
array.splice(3,0,4) //ini menambah
console.log(array)

//8. slice() - mengambil element dari array dan simpan ke array yang baru
numbers = array.slice(1, 4) //4 itu tidak termasuk jadi kalau cuman sampe 3 kase 4
console.log(numbers)

//9. concat() -- menggabungkan array
let num1 = [1,2,3]
let num2 = [4,5,6]
let num3 = [7,8,9]
let combineNumber = num1.concat(num2,num3)
console.log(combineNumber);


//2. Object --> memiliki property & nilai
let johnObj = {
    fullName: "Ariel",
    age: 19,
    isActive: true,
    grade: [80,90,100],
    address: {
        street: "Jl.Arnold Mononutu",
        city : "Minahasa Utara",
        province: "Sulawesi Utara",
    },
    sayHello: function(){
        console.log("Hello my name is " + this.fullName); //untuk mengakses property dalam obj
    },
};

//cara mengakses element dalam object
//cara 1. Dot notation - pakai titik
console.log(johnObj.fullName)
console.log(johnObj.grade[1])   
console.log(johnObj.address.street)
johnObj.sayHello()

//cara 2. bracket notation
console.log(johnObj["fullName"])
console.log(johnObj["grade"][1])
console.log(johnObj["address"]['street'])
johnObj["sayHello"]()

johnObj.job = "Programmer"; //jika property tidak ada maka akan ditambahkan
delete johnObj.isActive; //untuk hapus property dalam object
console.log(johnObj);

