/*
Aufgabe: <5, Assoziative Arrays: Eisdealer>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <28.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace eisdealer {
    let anzahl: number = 0;
    let gesamtPreis: number = 0;
    let inputs: HTMLCollectionOf<HTMLInputElement>;
    let preisElement: HTMLSpanElement;
    let zusammenfassungElement: HTMLElement;
    let zusammenFassung: string = "";


    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log(data);
        console.log("init3");
        writeHTML(data);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {

            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("input", handleInput);
        }
        let button: HTMLElement = document.getElementById("button");
        button.addEventListener("click", validateForm);
        inputs = document.getElementsByTagName("input");
        preisElement = document.getElementById("preis-total");
        zusammenfassungElement = document.getElementById("zusammenfassung");

    }
    function writeHTML(_data: eisdealerBlock): void {

        let fieldsets: string = "";
        let data: { [eisdealerBlock: string]: inhaltBlock[] } = _data;
        for (let eisdealerBlock in data) {
            if (eisdealerBlock == "eissorten") {
                let eissorten: inhaltBlock[] = data[eisdealerBlock];
                let fieldset: string =
                    `
                <fieldset id="eissorten">
                <legend> Unsere Eissorten </legend>
                <p>Preis pro Kugel: 1€</p>`;

                for (let i: number = 0; i < eissorten.length; i++) {
                    let eissorte: inhaltBlock = eissorten[i];
                    fieldset +=
                        `                   
                <label for="${eissorte.id}">${eissorte.id}</label>
                <input type="number" name="anzahlKugeln" id="${eissorte.id}" step="1" min="0" max="10" value="0" data-preis="1"/>
                <br>`;
                }

                fieldsets += fieldset;
            }

            if (eisdealerBlock == "toppings") {
                let toppings: inhaltBlock[] = data[eisdealerBlock];

                let fieldset: string =
                    `
                <fieldset id="toppings">
                <legend>Toppings?</legend>
                <p>Preis pro Topping: 1€</p>`;
                for (let i: number = 0; i < toppings.length; i++) {
                    let topping: inhaltBlock = toppings[i];
                    fieldset +=
                        `                   
                        <input type="checkbox" name="topping" value="${topping.id}" id="${topping.id}" data-preis="1"/>
                        <label for="${topping.id}">${topping.id}</label>
                        <br>
                        `;


                }
                fieldsets += fieldset;
            }
            if (eisdealerBlock == "soßen") {
                let soßen: inhaltBlock[] = data[eisdealerBlock];

                let fieldset: string =
                    `
                        <p>Soßen-Toppings:</p>
                        <p>Soßentopping gibt´s gratis dazu:</p>`;
                for (let i: number = 0; i < soßen.length; i++) {
                    let soße: inhaltBlock = soßen[i];
                    fieldset +=
                        `                   
                        <input type="radio" name="topping" value="${soße.id}" id="${soße.id}" data-preis="0"/>
                        <label for="${soße.id}">${soße.id}</label>
                        <br>
                        `;


                }
                fieldsets += fieldset;
            }
            if (eisdealerBlock == "wOb") {
                let wOb: inhaltBlock[] = data[eisdealerBlock];
                let fieldset: string =
                    `
                    <fieldset id="wOb">
                    <legend>Waffel oder Becher?</legend>`;
                for (let i: number = 0; i < wOb.length; i++) {
                    let behälter: inhaltBlock = wOb[i];
                    fieldset +=
                        `                   
                        <input type="radio" name="wOb" value="${behälter.id}" id="${behälter.id}" data-preis="0"/>
                        <label for="${behälter.id}">${behälter.id}</label>
                        <br>`;



                }
                fieldsets += fieldset;
            }
            document.getElementById("fieldset").innerHTML = fieldsets;
        }

    }
    //alte Funktionen 
    function handleInput(_event: Event): void {
      
        gesamtPreis = 0;
        zusammenFassung = "";
        for (let i: number = 0; i < inputs.length; i++) {
            anzahl = 0;
            let input: HTMLInputElement = inputs[i];
            let preis: number = +input.getAttribute("data-preis");
            //änderung: gecheckt oder eissorten
            if (input.checked == true || input.type == "number") {
                if (input.type == "checkbox" || input.type == "radio") {
                    anzahl = 1;
                } else {
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

    function validateForm(): void {
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            input.className = "validated";
        }
    }

}