// Benzin istasyonu
/*
1- Dizel : 24.53
2- benzin : 22.25
3lpg : 11.1


gelen müşteriden alacagımız bilgiler
1-yakıt tipi
2- yüklenecek yakıt litresi
*/


let dizel = 24.53 , benzin = 22.25, lpg = 11.1;

const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+ yeniSatir
+ "2- Benzin"+ yeniSatir
+"3- LPG"+ yeniSatir
+"Yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);

if(yakitTipi=="1" || yakitTipi == "2" || yakitTipi == "3"){
    let yakitLitresi = Number(prompt("Yakıt Litresi Giriniz "));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));
    
    if (yakitTipi=="1") {
        
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
    
        if (odenecekTutar<bakiye) {
            // bakiye yeterli
    
            bakiye = bakiye-odenecekTutar;
    
            alert("yakıtınız alma işlemi başarılı"+ yeniSatir
            + "kalan bakiye "+ bakiye);
    
    
        }else{
            // bakiye yeterli değil
            alert("bakiyeniz yetersiz"+ yeniSatir
            + "ödenecek tutar "+ odenecekTutar+ yeniSatir
            +"bakiye: "+bakiye+yeniSatir
            +"eksik Tutar: "+ (odenecekTutar-bakiye));
    
        }
    }else if (yakitTipi=="2") {
        let odenecekTutar = benzin*yakitLitresi;
    
        if (odenecekTutar<bakiye) {
            // bakiye yeterli
    
            bakiye = bakiye-odenecekTutar;
    
            alert("yakıtınız alma işlemi başarılı"+ yeniSatir
            + "kalan bakiye "+ bakiye);
    
    
        }else{
            // bakiye yeterli değil
            alert("bakiyeniz yetersiz"+ yeniSatir
            + "ödenecek tutar "+ odenecekTutar+ yeniSatir
            +"bakiye: "+bakiye+yeniSatir
            +"eksik Tutar: "+ (odenecekTutar-bakiye));
    
        }
            
    }else if (yakitTipi=="3") {
        let odenecekTutar = lpg*yakitLitresi;
    
        if (odenecekTutar<bakiye) {
            // bakiye yeterli
    
            bakiye = bakiye-odenecekTutar;
    
            alert("yakıtınız alma işlemi başarılı"+ yeniSatir
            + "kalan bakiye "+ bakiye);
    
    
        }else{
            // bakiye yeterli değil
            alert("bakiyeniz yetersiz"+ yeniSatir
            + "ödenecek tutar "+ odenecekTutar+ yeniSatir
            +"bakiye: "+bakiye+yeniSatir
            +"eksik Tutar: "+ (odenecekTutar-bakiye));
    
        }
}
}else{
    alert("Lütfen geçerli yakıt tipi giriniz")
}