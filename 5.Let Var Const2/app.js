// Var Let Const

// degisken nedir?

/*

var/let/const degiskenIsmi=degiskenDegeri

let sayi=10;

*/

// var : function scope -- ram bellekte cok fazla yer kaplar
// let/const : block scope özwlliğinw sahip


function selamVer(){
    var selam="Herkese Selam";  //function scope
    if(true){
        var b=10;
        console.log(b);
    }
    console.log(selam); 
}

selamVer();

// LET CONS ARASINDAKİ FARK

//const(constant) : sabit degismez demek
//const a=10;
//a=15;
//console.log(a);   10 u yazdırır guncelleme yapmaz


//let b=5;
//b=7;
//b=12;
//console.log(b);      konsolda 12 yazar guncelleme kabul eder

/*const user={
    username: "enes",
    password:"123"
}

user.username="enesbayram";
user.password = "1254"

console.log(user); süslü parantezin içine yeni bir şey atayamayız fakat icindekileri guncelleyebilirz
*/  