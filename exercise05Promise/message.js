import helloWorld from './helloWorld.js';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

//Mengapa kita perlu menambahkan await di dalam messages?
//Karena helloWorld() mengembalikan sebuah Promise, bukan langsung string "Hello World!".
//Dengan await, JavaScript akan menunggu hingga Promise selesai (resolve) sebelum melanjutkan eksekusi kode.
//Kalau tidak pakai await, yang kita dapatkan hanya janji (Promise) tanpa hasil akhirnya.


//Apa yang terjadi jika await dihapus?
// Jika await dihapus, variabel msg akan berisi object Promise yang masih pending. 
// Jadi, saat dicetak dengan console.log(msg), yang tampil bukan "Hello World!" tapi semacam ini:
// Promise { <pending> }
// Artinya kita tidak mendapatkan nilai string yang diinginkan, melainkan Promise itu sendiri.


//Mengapa kita perlu menggunakan export dan import di sini?
// export digunakan supaya function helloWorld bisa dipakai di luar file tempat ia dibuat. 
// import digunakan supaya file lain bisa mengakses function tersebut.