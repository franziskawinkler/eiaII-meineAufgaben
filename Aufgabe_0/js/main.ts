/*Funktion, um Namen eingeben zu müssen */
function nameEingeben(): void {
    /*Variable vom Typ string; prompt-Box mit Namenseingabe*/
    let _nameDerPerson: string = prompt("What´s your name?", "Tony Stark");
    /*Begrüßung der Person auf meiner Seite*/
    let _herzlichWillkommen: string= "Hallo" +" "+ _nameDerPerson + ", herzlich Willkommen auf dieser Seite!";
    /*Ausgabe auch auf der Konsole*/
    console.log(_herzlichWillkommen);
    document.getElementById("greeter").innerHTML=_herzlichWillkommen;
}
