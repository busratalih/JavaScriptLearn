
// let sayi = prompt("Lütfen 1 ile 5 arasında sayı giriniz")

// switch(sayi)
// {
//     case "1" : 
//     console.log("Girilen sayi 1");
//     break;
    
//     case "2" : 
//     console.log("Girilen sayi 2");
//     break;

//     case "3" : 
//     console.log("Girilen sayi 3");
//     break;

//     case "4" : 
//     console.log("Girilen sayi 4");
//     break;

//     case "5" : 
//     console.log("Girilen sayi 5");
//     break;

//     default:
//         console.log("Girilen sayi 1-5 arasında olmalıdır");
//         break;
// }

let yeniSatir = "\r\n";

let metin = "1-Pazartesi" +yeniSatir
+"2- Salı"+yeniSatir
+"3- Çarşamba"+yeniSatir
+"4- Perşembe"+yeniSatir
+"5- Cuma"+yeniSatir
+"6- Cumartesi"+yeniSatir
+"7- Pazar"+yeniSatir
+"Lütfen bir seçim yapınız";

let deger = prompt(metin);



switch(deger){

    case "1" :
     console.log("Pazartesi günü");
    break;

    case "2" :
        console.log("Salı günü");
       break;

       case "3" :
        console.log("Çarşamba günü");
       break;

       case "4" :
        console.log("Perşembe günü");
       break;

       case "5" :
        console.log("Cuma günü");
       break;

       case "6" :
        console.log("Cumartesi günü");
       break;

       case "7" :
        console.log("Pazar günü");
       break;

       default:

       console.log("geçerli bir gün giriniz");

       break;
       
}



