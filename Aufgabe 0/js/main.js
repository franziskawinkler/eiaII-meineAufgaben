/*Funktion, um Namen eingeben zu müssen */
function nameEingeben() {
    /*Variable vom Typ string; prompt-Box mit Namenseingabe*/
    let _nameDerPerson = prompt("What´s your name?", "Tony Stark");
    /*Begrüßung der Person auf meiner Seite*/
    let _herzlichWillkommen = "Hallo" + " " + _nameDerPerson + ", herzlich Willkommen auf dieser Seite!";
    /*Ausgabe auch auf der Konsole*/
    console.log(_herzlichWillkommen);
    document.getElementById("greeter").innerHTML = _herzlichWillkommen;
}
//# sourceMappingURL=main.js.map