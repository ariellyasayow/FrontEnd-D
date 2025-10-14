import ambilDataUser from './ambilDataUser.js';

ambilDataUser();

//apa perbedaan pendekatan promise chaining dengan async/await?
//Perbedaan utama antara Promise chaining dan async/await ada pada gaya penulisan. 
// Promise chaining menggunakan .then() berantai sehingga bisa terlihat rumit jika langkahnya banyak. 
// Sedangkan async/await membuat kode lebih sederhana, mirip kode sinkron, sehingga lebih mudah dibaca. 
// Untuk error handling, Promise chaining memakai .catch(), sementara async/await menggunakan try...catch yang lebih jelas.