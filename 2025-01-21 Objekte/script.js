// Aufgabe a)
const Hund = {
    name: "Günter",
    rasse: "Golden Redriver",
    farbe: "gold",
    gewicht: 15,
    laenge: 1.2,
    geräusch: function() {
        console.log("Wufff");
    },
    bmi: function() {
        return this.gewicht / this.laenge;
    }
};

const Katze = {
    name: "Goofy",
    rasse: "Ragdoll",
    farbe: "schwarz",
    gewicht: 4,
    laenge: 0.5,
    geräusch: function() {
        console.log("Miau");
    },
    bmi: function() {
        return this.gewicht / this.laenge;
    }
};

const Meerschweinchen = {
    name: "Hans",
    rasse: "Rex",
    farbe: "pink",
    gewicht: 5,
    laenge: 0.4,
    geräusch: function() {
        console.log("Grunz");
    },
    bmi: function() {
        return this.gewicht / this.laenge;
    }
};


Hund.geräusch(); 
console.log(Hund.bmi());
Katze.geräusch(); 
console.log(Katze.bmi()); 
Meerschweinchen.geräusch(); 
console.log(Meerschweinchen.bmi());

// Aufgabe b)

function Säugetier(Name, Rasse, Farbe, Gewicht, Länge, bmi) {
    this.name = Name;
    this.Rasse = Rasse;
    this.Farbe = Farbe;
    this.Gewicht = Gewicht; 
    this.Laenge = Länge;     

}

for (i = 0; i<30; i++){
    console.log(new Säugetier(Math.random(), Math.random(),Math.random(),Math.random(), Math.random()*10));
}



//Aufgabe C

function Säugetier(Name, Rasse, Farbe, Gewicht, Länge, bmi) {
    this.name = Name;
    this.rasse = Rasse;
    this.farbe = Farbe;
    this.gewicht = Gewicht;
    this.laenge = Länge;
    this.bmi = this.gewicht / Math.pow(this.laenge, 2);
}

const farben = ["Gelb", "Schwarz", "Weiß", "Braun", "Rot", "Gelb", "Blau", "Grün", "Orange", "Rosa", "Violett"];
const Silben1 = ["ka", "lo", "mi", "ta", "su", "ri", "la", "vo", "zu", "ni"];
const Silben2 = ["na", "ri", "sa", "lo", "ki", "ta", "me", "zu", "lo", "pi"];
const Silben3 = ["to", "mi", "ka", "ra", "li", "sa", "vo", "zu", "ni", "po"];
const Silben4 = ["sa", "lo", "na", "ti", "ka", "ri", "vo", "zu", "ma", "do"];
const rassen = ["Löwe", "Tiger", "Elefant", "Giraffe", "Kangaroo", "Zebra", "Panda", "Bär", "Wolf", "Fuchs"];

for (let i = 0; i < 30; i++) {
    let gewicht = Math.trunc(Math.random() * 10) * 50 + 50;
    let laenge = Math.trunc(Math.random() * 10) + 1;  

    
    while (gewicht / Math.pow(laenge, 2) < 10 || gewicht / Math.pow(laenge, 2) > 50) {
        gewicht = Math.trunc(Math.random() * 10) * 50 + 50;
        laenge = Math.trunc(Math.random() * 10) + 1;
    }

    console.log(new Säugetier(
        Silben1[Math.trunc(Math.random() * 10)] + Silben2[Math.trunc(Math.random() * 10)] + Silben3[Math.trunc(Math.random() * 10)] + Silben4[Math.trunc(Math.random() * 10)],
        rassen[Math.trunc(Math.random() * 10)],
        farben[Math.trunc(Math.random() * 10)],
        gewicht,
        laenge
    ));
}