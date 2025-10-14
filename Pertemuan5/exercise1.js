//exercise #01
//buat program untuk menghitung BMI dimana dengan menggunakan IIFE & 
//callback function yang memiliki parameter dan return value
//1. IIFE
let output = (function(berat,tinggi){
    let n = berat/(tinggi*tinggi)
    return n > 25 ? "BMI anda adalah "+n+", kategori kelebihan berat badan" : "BMI anda adalah "+n+" , katergori normal";
})(45,1.65);
console.log(output);


//2. callback
function BMI(callback){
    let result = callback(100,1.65)
    return result
}

let out= BMI(function(berat,tinggi){
    let n = berat/(tinggi*tinggi);
    return  n > 25 ? "BMI anda adalah "+n+", kategori kelebihan berat badan" : "BMI anda adalah "+n+" , katergori normal";;
});
console.log(out)
