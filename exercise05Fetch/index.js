import ambilDataUser from './ambilDataUser.js';

ambilDataUser();

// 1. Mengapa kita butuh .json() setelah fetch()?
// fetch() hanya memberikan respons mentah berupa Response object (berisi status, headers, body, dsb).
//  Body dari respons masih berupa stream (belum bisa dipakai langsung).
//.json() digunakan untuk membaca isi body dan mengubahnya menjadi object Jav


// 2. Jika API gagal merespons, bagaimana cara menambahkan error handling?
// Kita bisa menambahkan error handling supaya program tidak langsung error 
// ketika server down, URL salah, atau jaringan bermasalah. Caranya:
// Pada Promise chaining, tambahkan .catch((error) => { ... }) di akhir.
// Pada async/await, bungkus dengan try...catch.