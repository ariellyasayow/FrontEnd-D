//JavaScript Variable & Operators
//1. JavaScript Variable
//cara deklarasi variable di javascript menggunakan kata kunci:
// - let(variable yang mana datanya bisa diganti ganti)
// - const (variable yang tidak bisa di ubah)
//case sensitive
// let fullName = "awriel";  //camel case (di JS biasanya pakai ini)
// let FullName = "awriel";  //pascal case
// let full_name= "awriel";  //snake case
 
// //Tipe-tipe data
// const gender = "male"   //string
// let age = 30            //number (integer)
// let weight = 90.6       //number (float)
// let isMarried = true    //boolean (true or false)
// let grade = null        //null (masih kosong)
// let address             //undefined (masuk variable tapi tidak tau tipe data apa)


// console.log(gender)


//2. JavaScript Operator
//a. arithmetic operator (+. -. *, /, %, **)
// let bil1 = 20
// let bil2 = 5
// console.log(bil1 + bil2)
// console.log(bil1 - bil2)
// conlose.log(bil1 * bil2)
// console.log(bil1 / bil2)
// console.log(bil1 % bil2)
// console.log(bil1 ** bil2)


// let phi = 3.14
// let r = 7
// console.log(phi * (r**2))

//b. Asisigment operator (=, +=, -=, *=, /=)
// let bilangan = 5
// bilangan = bilangan + 10
// bilangan += 5

//c. string operator (+)  penggabungan string (concatintaion)
// const firstName = "Ariel"
// const lastName = "sayow"
// const fullName = firstName + lastName
// const fullNameSpasi = firstName + " " +lastName

//d. relational operator (==, ===, >, <, >=, <=, !=)
// let bil1 = 10
// let bil2 = 20
// let bil3 = "10"

// console.log(bil1 == bil3) //tanpa mengecek tipe data
// console.log(bil1 === bil3) //mengecek tipe data
// console.log(bil1 > bil2)
// console.log (bil1 < bil2)

//e. logical operator (&&, ||, !)
// console.log(true && true) //true
// console.log(true && false)//false

// console.log(false || true)//true
// console.log(false || false)//false

// console.log(!true)//false

// //f. ternary operator (?(mirip if) :(mirip else))
// let age = 16
// let isEligible = age >= 17 ? "bisa buat KTP" : "belum bisa buat KTP"
// console.log(isEligible)



//exercise
//buat program yang dapat menghitung BMI (body mass index)
// rumus : berat(kg) : (tinggi(m)* tinggi (m))
// tampilkan hasilnya
// jika BMI >25 -->
let berat = 49
let tinggi = 1.65
let BMI = berat / (tinggi * tinggi)
let isEligible = BMI > 25 ? "BMI anda adalah"+BMI+", katergori kelebihan berat badan" : "BMI anda adalah "+BMI+" , katergori normal"
console.log(isEligible)