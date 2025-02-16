const colors = ["yellow", "black", "gray", "brown", "red", "yellow", "blue", "green", "orange", "pink", "violet"];

function addButtons() {
    const container = document.getElementById("button-container");
    const count = container.getElementsByTagName("button").length;
        
    for (let i = 0; i < count; i++) {
        const newButton = document.createElement("button");
        newButton.innerText = "Klick mich";
        newButton.onclick = addButtons;
        container.appendChild(newButton);
        color = colors[Math.trunc(Math.random() * 10) + 1];
        newButton.style.backgroundColor = color;
        newButton.style.border = "none";
        newButton.style.color = "white";
        newButton.id = "button" + (count + i + 1);
    }
    
    document.getElementById("counter").innerText = "Anzahl der Buttons: " + (count * 2);
}

function deleteButton() {
    let container = document.getElementById("button-container");
    let count = container.getElementsByTagName("button").length;
    let Anzahl = parseInt(document.getElementById("input").value);
    console.log(Anzahl);
        if (Anzahl <= 0){
            alert("Bitte geben Sie eine größere Zahl ein");
        }
        else if (Anzahl > count){
            alert("Bitte geben Sie eine kleinere Zahl ein!");
        }
        else{
            for(let i = count; i >= count-Anzahl + 1; i--){
                document.getElementById("button" + i).remove();
            }
            
        }

    let count2 = container.getElementsByTagName("button").length;
    document.getElementById("counter").innerText = "Anzahl der Buttons: " + (count2);
}


