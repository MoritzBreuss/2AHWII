selection()
let sum = 0;

function selection(){
    let productDropdown = document.getElementById("product");


    let productPrice = productDropdown.value;
    document.getElementById("output").innerHTML = productPrice + "€";
    
}

function add(){

    let productDropdown = document.getElementById("product");

    let productName = productDropdown.options[productDropdown.selectedIndex].text;
    let productPrice = Number(productDropdown.value);

    let tabelle = document.getElementById("table");

    let reihe = tabelle.insertRow();

    let name = reihe.insertCell(0);
    let preis = reihe.insertCell(1);

    name.innerHTML = productName;
    preis.innerHTML = productPrice + "€";

    sum += productPrice; 

    document.getElementById("betrag").innerHTML =sum.toFixed(2) + "€";
}


function alertFunction(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let total = 0;
    
    total = sum;


    if(username == "") {
        alert("Bitte geben Sie ihren Namen ein!");
    }
    else if(email == "") {
        alert("Bitte geben Sie ihre Emailadresse ein!");
    }
    else if(total === 0){
        alert("Bitte fügen Sie etwas in ihren Warenkorb hinzu!");
    }
    else {
        alert("Ihre Bestellung " + username + " im Wert von " + total + "€ " + "wurde erfolgreich aufgegeben. Die Rechnung wurde an die E-mailadresse " + email + " gesendet.");
    }
}