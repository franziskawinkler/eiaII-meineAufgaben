/*
Aufgabe: <7>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <09.05.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Eisdealer {
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

        document.getElementById("submit").addEventListener("click", schreibeURL);


    }
    function writeHTML(_data: EISDEALERBLOCK): void {
        let angebot: string = "";
        let data: { [EISDEALERBLOCK: string]: INHALTBLOCK[] } = _data;
        for (let EISDEALERBLOCK in data) {
            if (EISDEALERBLOCK == "eissorten") {
                let eissorten: INHALTBLOCK[] = data[EISDEALERBLOCK];
                let fieldset: string =
                    `
                <fieldset id="eissorten">
                <legend> Unsere Eissorten </legend>
                <p>Preis pro Kugel: 1€</p>`;

                for (let i: number = 0; i < eissorten.length; i++) {
                    let eissorte: INHALTBLOCK = eissorten[i];
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
                let toppings: INHALTBLOCK[] = data[EISDEALERBLOCK];
                let fieldset: string =
                    `
                <fieldset id="toppings">
                <legend>Toppings?</legend>
                <p>Preis pro Topping: 1€</p>`;
                for (let i: number = 0; i < toppings.length; i++) {
                    let topping: INHALTBLOCK = toppings[i];
                    fieldset +=
                        `                   
                        <input type="${topping.type}" name="${topping.id}" value="ja" id="${topping.id}" data-preis="${topping.preis}"/>
                        <label for="${topping.id}">${topping.id}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALERBLOCK == "saucen") {
                let saucen: INHALTBLOCK[] = data[EISDEALERBLOCK];
                let fieldset: string =
                    `
                    <fieldset id="saucen">    
                    <legend>Soßen-Toppings:</legend>
                    <p>Soßentopping gibt´s gratis dazu:</p>`;
                for (let i: number = 0; i < saucen.length; i++) {
                    let sauce: INHALTBLOCK = saucen[i];
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
                let wOb: INHALTBLOCK[] = data[EISDEALERBLOCK];
                let fieldset: string =
                    `
                    <fieldset id="wOb">
                    <legend>Waffel oder Becher?</legend>`;
                for (let i: number = 0; i < wOb.length; i++) {
                    let behälter: INHALTBLOCK = wOb[i];
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
    function handleInput(_event: Event): void {
        gesamtPreis = 0;
        zusammenFassung = "";
        for (let i: number = 0; i < inputs.length; i++) {
            anzahl = 0;
            let input: HTMLInputElement = inputs[i];
            let preis: number = +input.getAttribute("data-preis");
            //änderung: radiobutton/checkbox/anzahl eissorten
            if (input.checked == true || input.type == "number") {
                if (input.type == "checkbox" || input.type == "radio") {
                    anzahl = 1;
                } else {
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
        console.log(zusammenFassung);

    }

    function validateForm(): void {
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            input.className = "validated";
        }
    }
    //neue Funktionen
    function schreibeURL(): void {
        let url: string = "https://eia2-winklerfranziska.herokuapp.com/?";
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            //wenn der typ der input elemente number ist (=eissorten) und die anzahl größer null ist dann soll dies in die URL hinzugefügt werden
            if (input.type == "number" && input.value > "0") {
                url += `${input.id}:${input.value}Kugeln&`;
            }
            //für radiobutton oder chedckbox
            if (input.checked == true) {
                if (input.type == "checkbox" || input.type == "radio") {
                    url += `${input.id}&`;
                }
            }
        }
        url += preisElement.innerText = String(gesamtPreis.toFixed(2));
        url += `Euro`;
        console.log(url);
        sendRequestWithCustomData(url);
    }
    function sendRequestWithCustomData(url: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("submitÜbersicht").innerHTML = xhr.response;
        }

    }
}