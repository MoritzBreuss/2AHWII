// Event Listener, der auf den Klick des Buttons mit der ID "Starten" wartet
document.getElementById("Starten").addEventListener("click", Bankautomat);

function Bankautomat() {
    // Holt den eingegebenen Wert aus dem Input-Feld und wandelt ihn in eine Zahl um
    let x = parseInt(document.getElementById("input").value);
    let wert;

    // Überprüft, ob die Eingabe keine Zahl ist
    if (isNaN(x)) {
        wert = "Du hast einen ungültigen Wert eingegeben!";
    } else {
        // Schaltet je nach festgelegten Fall zwischen festen Werten (100, 200, 300, 400)
        switch (x) {
            case 1:
                wert = "€100 werden ausgezahlt";
                break;
            case 2:
                wert = "€200 werden ausgezahlt";
                break;
            case 3:
                wert = "€300 werden ausgezahlt";
                break;
            case 4:
                wert = "€400 werden ausgezahlt";
                break;
            default:
                // Überprüft, ob der Betrag unter 10 oder über 400 liegt (ungültig)
                if (x < 10 || x > 400) { 
                    wert = "Du hast einen ungültigen Wert eingegeben!";
                // Prüft, ob der Betrag kein Vielfaches von 10 ist (ungültig)
                } else if (x % 10 > 0) { 
                    wert = "Du hast einen ungültigen Wert eingegeben!";
                } else {
                    // Gibt den validen Betrag aus
                    wert = "€" + x + " werden ausgezahlt";
                }
        }
    }

    // Zeigt die Ausgabe im HTML-Element mit der ID "output" an
    document.getElementById("output").innerHTML = wert;
}
