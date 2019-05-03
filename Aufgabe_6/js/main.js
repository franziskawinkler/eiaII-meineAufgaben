/*
Aufgabe: <6>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <03.05.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Eisdealer;
(function (Eisdealer) {
    let anzahl = 0;
    let gesamtPreis = 0;
    let inputs;
    let preisElement;
    let zusammenfassungElement;
    let zusammenFassung = "";
    window.addEventListener("load", init);
    function init(_event) {
        console.log(Eisdealer.data);
        console.log("init3");
        writeHTML(Eisdealer.data);
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
        //submit-Button, eventListener
        let submit = document.getElementById("submit");
        submit.addEventListener("click", handleInput);
    }
    function writeHTML(_data) {
        let angebot = "";
        let data = _data;
        for (let EISDEALERBLOCK in data) {
            if (EISDEALERBLOCK == "eissorten") {
                let eissorten = data[EISDEALERBLOCK];
                let fieldset = `
                <fieldset id="eissorten">
                <legend> Unsere Eissorten </legend>
                <p>Preis pro Kugel: 1€</p>`;
                for (let i = 0; i < eissorten.length; i++) {
                    let eissorte = eissorten[i];
                    fieldset +=
                        `                   
                <label for="${eissorte.id}">${eissorte.id}</label>
                <input type="${eissorte.type}" name="${eissorte.id}" id="${eissorte.id}" value="${eissorte.value}" step="1" min="0" max="10" data-preis="${eissorte.preis}" placeholder="0"/>
                <br>`;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALERBLOCK == "toppings") {
                let toppings = data[EISDEALERBLOCK];
                let fieldset = `
                <fieldset id="toppings">
                <legend>Toppings?</legend>
                <p>Preis pro Topping: 1€</p>`;
                for (let i = 0; i < toppings.length; i++) {
                    let topping = toppings[i];
                    fieldset +=
                        `                   
                        <input type="${topping.type}" name="${topping.name}" value="${topping.id}" id="${topping.id}" data-preis="${topping.preis}"/>
                        <label for="${topping.id}">${topping.id}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALERBLOCK == "saucen") {
                let saucen = data[EISDEALERBLOCK];
                let fieldset = `
                    <fieldset id="saucen">    
                    <legend>Soßen-Toppings:</legend>
                    <p>Soßentopping gibt´s gratis dazu:</p>`;
                for (let i = 0; i < saucen.length; i++) {
                    let sauce = saucen[i];
                    fieldset +=
                        `                   
                        <input type="${sauce.type}" name="${sauce.name}" value="${sauce.id}" id="${sauce.id}" data-preis="${sauce.preis}"/>
                        <label for="${sauce.id}">${sauce.id}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALERBLOCK == "wOb") {
                let wOb = data[EISDEALERBLOCK];
                let fieldset = `
                    <fieldset id="wOb">
                    <legend>Waffel oder Becher?</legend>`;
                for (let i = 0; i < wOb.length; i++) {
                    let behälter = wOb[i];
                    fieldset +=
                        `                   
                        <input type="${behälter.type}" name="${behälter.name}" value="${behälter.id}" id="${behälter.id}" data-preis="${behälter.preis}"/>
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
                if (anzahl != 0 || 0) {
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
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map