/*
Aufgabe: <4, Formulare: Eisdealer>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <21.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
/*Aufrgund der Osterfeiertage habe ich es leider nicht geschafft meine Konzepte und Skizzen an meinen Code
anzupassen und den Code richtig fertig geschrieben zu bekommen. Dies werde ich die Tage noch nachholen!
Ich bitte um Entschuldigung! F.Winkler */
var eisdealer;
(function (eisdealer) {
    let anzahl = 0;
    let gesamtPreis = 0;
    let inputs;
    let preisElement;
    let zusammenfassungElement;
    let zusammenFassung = "";
    window.addEventListener("load", init);
    function init(_event) {
        console.log("init2");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("input", handleInput);
        }
        let button = document.getElementById("button");
        button.addEventListener("click", validateForm);
        inputs = document.getElementsByTagName("input");
        preisElement = document.getElementById("preis-total");
        zusammenfassungElement = document.getElementById("zusammenfassung");
    }
    function handleInput(_event) {
        gesamtPreis = 0;
        zusammenFassung = "";
        for (let i = 0; i < inputs.length; i++) {
            anzahl = 0;
            let input = inputs[i];
            let preis = +input.getAttribute("data-preis");
            if (preis) {
                if (input.type == "checkbox") {
                    if (input.checked) {
                        anzahl = 1;
                    }
                }
                else {
                    anzahl = +input.value;
                }
                gesamtPreis = gesamtPreis + preis * anzahl;
                if (anzahl > 0) {
                    zusammenFassung = zusammenFassung + anzahl + " " + input.labels[0].innerText + "\r\n";
                    console.log(input.labels[0].innerText);
                }
            }
        }
        zusammenfassungElement.innerText = zusammenFassung;
        preisElement.innerText = String(gesamtPreis.toFixed(2));
    }
    function validateForm() {
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            input.className = "validated";
        }
    }
})(eisdealer || (eisdealer = {}));
//# sourceMappingURL=main.js.map