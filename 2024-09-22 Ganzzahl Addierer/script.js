function calculat() {
    let a = parseInt(document.getElementById('number1').value);
    let b = parseInt(document.getElementById('number2').value);

    if (!document.getElementById('number1').value || !document.getElementById('number2').value) {
        document.getElementById("output").innerHTML = "Bitte beide Felder ausfüllen";
        return;
    }

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("output").innerHTML = "Bitte gib eine gültige Zahl an";
        return;
    }

    if (a < 0 || b < 0) {
        document.getElementById("output").innerHTML = "Bitte gib keine negativen Zahlen an";
        return;
    }

    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        document.getElementById("output").innerHTML = "Bitte gib keine Kommazahlen an";
        return
    }


    const sum = a + b;
    
    document.getElementById("output").innerHTML = "Das Ergebnis ist: " + sum;
}
