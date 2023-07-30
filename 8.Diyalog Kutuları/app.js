// Diyalog kutuları

/*
- Alert

- Prompt > scanner gibi çalışır kullanıcıdan değer alır. Aldığı değerleri string tipinde alır

- Confirm > Kullanıcıdan boolean döner, onay alır

*/
alert("nasılsın");

let isim = prompt("isminizi giriniz");
let yas = Number(prompt("yasınızı giriniz"));

console.log(typeof yas);

console.log("isminiz : "+isim);
console.log("yaşınız : "+yas);

let sonuc = confirm("bu mesajı silmek istediğinize emin misiniz")

console.log(sonuc);
