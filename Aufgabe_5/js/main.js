/*
Aufgabe: <5, Assoziative Arrays: Eisdealer>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <28.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
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
        console.log(eisdealer.data);
        console.log("init3");
        writeHTML(eisdealer.data);
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
    function writeHTML(_data) {
        let angebot = "";
        let data = _data;
        for (let eisdealerBlock in data) {
            if (eisdealerBlock == "eissorten") {
                let eissorten = data[eisdealerBlock];
                let fieldset = `
                <fieldset id="eissorten">
                <legend> Unsere Eissorten </legend>
                <p>Preis pro Kugel: 1€</p>`;
                for (let i = 0; i < eissorten.length; i++) {
                    let eissorte = eissorten[i];
                    fieldset +=
                        `                   
                <label for="${eissorte.id}">${eissorte.id}</label>
                <input type="${eissorte.type}" name="anzahlKugeln" id="${eissorte.id}" step="1" min="0" max="10" value="0" data-preis="1"/>
                <br>`;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (eisdealerBlock == "toppings") {
                let toppings = data[eisdealerBlock];
                let fieldset = `
                <fieldset id="toppings">
                <legend>Toppings?</legend>
                <p>Preis pro Topping: 1€</p>`;
                for (let i = 0; i < toppings.length; i++) {
                    let topping = toppings[i];
                    fieldset +=
                        `                   
                        <input type="${topping.type}" name="${topping.name}" value="${topping.id}" id="${topping.id}" data-preis="1"/>
                        <label for="${topping.id}">${topping.id}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (eisdealerBlock == "soßen") {
                let soßen = data[eisdealerBlock];
                let fieldset = `
                        <p>Soßen-Toppings:</p>
                        <p>Soßentopping gibt´s gratis dazu:</p>`;
                for (let i = 0; i < soßen.length; i++) {
                    let soße = soßen[i];
                    fieldset +=
                        `                   
                        <input type="${soße.type}" name="${soße.name}" value="${soße.id}" id="${soße.id}" data-preis="0"/>
                        <label for="${soße.id}">${soße.id}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            if (eisdealerBlock == "wOb") {
                let wOb = data[eisdealerBlock];
                let fieldset = `
                    <fieldset id="wOb">
                    <legend>Waffel oder Becher?</legend>`;
                for (let i = 0; i < wOb.length; i++) {
                    let behälter = wOb[i];
                    fieldset +=
                        `                   
                        <input type="radio" name="wOb" value="${behälter.id}" id="${behälter.id}" data-preis="0"/>
                        <label for="${behälter.id}">${behälter.id}</label>
                        <br>`;
                }
                angebot += fieldset;
            }
            document.getElementById("fieldset").innerHTML = angebot;
        }
    }
    //alte Funktionen 
    function handleInput(_event) {
        gesamtPreis = 0;
        zusammenFassung = "";
        for (let i = 0; i < inputs.length; i++) {
            anzahl = 0;
            let input = inputs[i];
            let preis = +input.getAttribute("data-preis");
            //änderung: radiobutton/checkbox/anzahl eissorten
            if (input.checked == true || input.type == "number") {
                if (input.type == "checkbox" || input.type == "radio") {
                    anzahl = 1;
                }
                else {
                    //anzahl der eissorte als Nummer 
                    anzahl = Number(input.value);
                }
                gesamtPreis = gesamtPreis + preis * anzahl;
                //wenn anzahl nicht gleich null, dann die Zusammenfassung schreiben
                if (anzahl != 0) {
                    zusammenFassung = zusammenFassung + anzahl + " " + input.id + "\r\n";
                }
            }
        }
        //zusammenfassung in html darstellen
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