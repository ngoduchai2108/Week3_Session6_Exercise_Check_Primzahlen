function checkPrimzahlen(n) {
    let check=true;
    if (n===2||n===3){
        check=true;
    }
    else {
        for (let i=2;i<=Math.sqrt(n);i++){
            if (n%i===0){
                check=false;
                break;
            }
        }
    }
    return check;
}