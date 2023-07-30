// Koşul yapıları

// let not = 45;

// if(not>50){

//     console.log("geçtiniz , notunuz : "+ not);
// }else{
//     console.log("Kaldınız ,notunuz : "+ not);
// }


// let yas = Number(prompt("yasınız: "));// stiringi integer a çevirdik

// let para = Number(prompt("Bütçeniz: "));

// if(yas>=18 && para>=3000){
//     alert("Ehliyet Sınavına katılabilirsiniz");
// }else{
//     alert("Ehliyet Sınavına katılamazsınız");
// }


// ------------DERS ORTALAMASI BULMA--------

let vize1 = Number(prompt("vize1 notunuzu giriniz : "))
let vize2 = Number(prompt("vize2 notunuzu giriniz : "))
let final = Number(prompt("final notunuzu giriniz : "))

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if (ortalama>=60) {
    alert("Dersten Geçtiniz tebrikler ");
    console.log("Dersten Geçtiniz tebrikler ");
}else{
    alert("Kaldınız tebrikler ");
    console.log("Kaldınız tebrikler ");
}