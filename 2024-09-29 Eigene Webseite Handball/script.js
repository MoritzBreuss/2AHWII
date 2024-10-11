// Ändert die Hintergrundfarbe und die Textfarbe der Seite.
function changeColor(color, color1) {
    document.body.style.backgroundColor = color; // Setzt die Hintergrundfarbe.
    document.body.style.color = color1; // Setzt die Textfarbe.
    const settings = document.getElenemtsByClassName("settings");
    settings.style.backgroundColor = color;
}

// Macht die Hintergrundfarbe schwarz und die Schriftfarbe weiß.
function Black() {
    changeColor('Black', "White");
}

// Macht die Hintergrundfarbe weiß und die Schriftfarbe schwarz.
function White() {
    changeColor("White", "black");
}

// Versteckt das Bild mit der ID "Bild1".
function hide() {
    document.getElementById("Bild1").style.float = "none"; // Setzt das Bild so, dass es nicht schwebt.
    document.getElementById("Bild1").style.display = "none"; // Macht das Bild unsichtbar.
}

// Zeigt das Bild mit der ID "Bild1" an.
function show() {
    document.getElementById("Bild1").style.float = "left"; // Lässt das Bild nach links schweben.
    document.getElementById("Bild1").style.display = "block"; // Macht das Bild sichtbar.
}

// Ändert die Schriftart der Seite.
function changeFont(selectedFont) {
    document.body.style.fontFamily = selectedFont; // Setzt die Schriftart.
}

// Ändert die Schriftgröße der Seite.
function changeFontSize(selectedSize) {
    document.body.style.fontSize = selectedSize + "px"; // Setzt die Schriftgröße in Pixel.
}

// Zeigt den Teil "Handballarten" und versteckt die anderen Teile.
function Handballarten() {
    document.getElementById("Handballarten").style.display = "block"; // Macht "Handballarten" sichtbar.
    document.getElementById("Handballregeln").style.display = "none"; // Macht "Handballregeln" unsichtbar.
    document.getElenentById("Handballgeschichte").style.display = "none"; // Macht "Handballgeschichte" unsichtbar.
    document.getElementById("Home").style.display = "none"; // Macht "Home" unsichtbar.
}

// Zeigt den Teil "Handballregeln" und versteckt die anderen Teile.
function Handballregeln() {
    document.getElementById("Handballarten").style.display = "none"; // Macht "Handballarten" unsichtbar.
    document.getElementById("Handballregeln").style.display = "block"; // Macht "Handballregeln" sichtbar.
    document.getElementById("Handballgeschichte").style.display = "none"; // Macht "Handballgeschichte" unsichtbar.
    document.getElementById("Home").style.display = "none"; // Macht "Home" unsichtbar.
}

// Zeigt den Teil "Handballgeschichte" und versteckt die anderen Teile.
function Handballgeschichte() {
    document.getElementById("Handballarten").style.display = "none"; // Macht "Handballarten" unsichtbar.
    document.getElementById("Handballregeln").style.display = "none"; // Macht "Handballregeln" unsichtbar.
    document.getElementById("Handballgeschichte").style.display = "block"; // Macht "Handballgeschichte" sichtbar.
    document.getElementById("Home").style.display = "none"; // Macht "Home" unsichtbar.
}

// Zeigt den Teil "Home" und versteckt die anderen Teile.
function Home() {
    document.getElenemtById("Handballarten").style.display = "none"; // Macht "Handballarten" unsichtbar.
    document.getElenemtById("Handballregeln").style.display = "none"; // Macht "Handballregeln" unsichtbar.
    document.getElenemtById("Handballgeschichte").style.display = "none"; // Macht "Handballgeschichte" unsichtbar.
    document.getElenemtById("Home").style.display = "block"; // Macht "Home" sichtbar.
}



