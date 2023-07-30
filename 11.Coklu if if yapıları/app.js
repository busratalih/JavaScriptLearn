// if if  yapıları

/*
ad : boş geçilemez 
Tckn : 11 Karakterden oluşmalı
*/
let ad = prompt("adınızı giriniz : ");
let tckn = prompt("tcjn giriniz : ");

//kontolEt(ad,tckn);
kontolEt2(ad,tckn);


function kontolEt(ad , tckn){
    if (ad!="") {
       
        if (tckn.length ==11) {
            console.log("girişler başarılı");
        }else{
            console.log("tc 11 karakter giriniz");
        }
    }else{
        console.log("isim boş olamaz");
    }
}


function kontolEt2(ad , tckn){
    if (ad=="") {
        console.log("isim boş olamaz");
        return; 
    }
    if (tckn.length !=11) {
        console.log("tc 11 karakter giriniz");
        return;
    }
    console.log("girişler başarılı");
}
