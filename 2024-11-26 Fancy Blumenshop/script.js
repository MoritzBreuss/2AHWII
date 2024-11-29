window.onload = function(){
    selection();
    add();
}

let sum = 0;

function selection() {
    const productDropdown = document.getElementById("floatingSelect");
    const productPrice = Number(productDropdown.value);
    if(productPrice > 0){
        document.getElementById("output").innerHTML = "Preis: "+ productPrice + "€";
        }
    else{
        document.getElementById("output").innerHTML = " ";
    }
}

const productQuantities = {
    Sonnenblume: { quantity: 0, flag: false },
    Rose: { quantity: 0, flag: false },
    Tulpe: { quantity: 0, flag: false },
    Lilie: { quantity: 0, flag: false },
};


function add() {
    const productDropdown = document.getElementById("floatingSelect");
    const productName = productDropdown.options[productDropdown.selectedIndex].text;
    const productPrice = Number(productDropdown.value);

    sum += productPrice;

    const productData = productQuantities[productName];

    if (productData) {
        productData.quantity += 1;

        if (!productData.flag) {
            productData.flag = true;
            const tabelle = document.getElementById("table");
            const reihe = tabelle.insertRow();
            reihe.setAttribute("id", productName); 
            const name = reihe.insertCell(0);
            const preis = reihe.insertCell(1);

            name.innerHTML = productName;
            preis.innerHTML = `${productData.quantity}x ${productPrice.toFixed(2)}€`;
        } else {
            
            const row = document.getElementById(productName);
            row.cells[1].innerHTML = `${productData.quantity}x ${productPrice.toFixed(2)}€`;
        }
    }

    document.getElementById("summe").innerHTML = sum.toFixed(2) + "€";
}


function alertFunction(){
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    if (username == "") {
        alert("Bitte geben Sie ihren Namen ein!");
    } else if (email == "") {
        alert("Bitte geben Sie ihre Emailadresse ein!");
    } else if (sum == 0) {
        alert("Bitte fügen Sie etwas in ihren Warenkorb hinzu!");
    } else {
        alert("Ihre Bestellung " + username + " im Wert von " + sum.toFixed(2) + "€ " +
            "wurde erfolgreich aufgegeben. Die Rechnung wurde an die E-Mail-Adresse " + email + " gesendet.");
    }
}
