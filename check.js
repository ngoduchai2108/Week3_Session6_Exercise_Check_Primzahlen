function check() {
    document.getElementById('result').innerHTML="";
    let n = parseInt(prompt('Nhap so can kiem tra!!!'));
    if (checkPrimzahlen(n)) {
        document.getElementById('result').innerHTML=n+" is Primzahlen!!!";
    }
    else {
        document.getElementById('result').innerHTML=n+" is not Primzahlen!!!";
    }

}