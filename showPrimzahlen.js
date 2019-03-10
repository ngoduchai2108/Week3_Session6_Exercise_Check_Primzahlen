function showPrimzahlen(num) {
    let data="";
    for (let j=2;j<=num;j++){
        if (checkPrimzahlen(j)){
            data+=j+" / ";
        }
    }
    return data;
}