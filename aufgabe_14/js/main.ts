namespace Eisdealer {
    let anzahl: number = 0;
    let gesamtPreis: number = 0;
    let inputs: HTMLCollectionOf<HTMLInputElement>;
    let preisElement: HTMLSpanElement;
    let zusammenfassungElement: HTMLElement;
    let zusammenFassung: string = "";
    let serverAddress: string = "https://eia2-winklerfranziska.herokuapp.com";

    window.addEventListener("load", init);


    function init(): void {
        console.log("init");
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
        document.getElementById("submit").addEventListener("click", order);


    }
    function writeHTML(_data: EISDEALER): void {
        let angebot: string = "";
        let data: { [EISDEALER: string]: AUSWAHL[] } = _data;
        for (let EISDEALER in data) {
            if (EISDEALER == "eissorten") {
                let eissorten: AUSWAHL[] = data[EISDEALER];
                let fieldset: string =
                    `
                <fieldset id="eissorten">
                <legend> Unsere Eissorten </legend>
                <p>Preis pro Kugel: 1€</p>`;

                for (let i: number = 0; i < eissorten.length; i++) {
                    let eissorte: AUSWAHL = eissorten[i];
                    fieldset +=
                        `                   
                <label for="${eissorte.name}">${eissorte.name}</label>
                <input type="number" name="${eissorte.name}" id="${eissorte.name}" data-type="${eissorte.type}" value="${eissorte.value}" step="1" min="0" max="10" data-preis="${eissorte.preis}" placeholder="0"/>
                <br>`;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALER == "toppings") {
                let toppings: AUSWAHL[] = data[EISDEALER];
                let fieldset: string =
                    `
                <fieldset id="toppings">
                <legend>Toppings?</legend>
                <p>Preis pro Topping: 1€</p>`;
                for (let i: number = 0; i < toppings.length; i++) {
                    let topping: AUSWAHL = toppings[i];
                    fieldset +=
                        `                   
                        <input type="checkbox" name="${topping.name}" value="ja" id="${topping.name}" data-preis="${topping.preis}"/>
                        <label for="${topping.name}">${topping.name}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALER == "saucen") {
                let saucen: AUSWAHL[] = data[EISDEALER];
                let fieldset: string =
                    `
                    <fieldset id="saucen">    
                    <legend>Soßen-Toppings:</legend>
                    <p>Soßentopping gibt´s gratis dazu:</p>`;
                for (let i: number = 0; i < saucen.length; i++) {
                    let sauce: AUSWAHL = saucen[i];
                    fieldset +=
                        `                   
                        <input type="radio" name="${sauce.name}" value="${sauce.name}" id="${sauce.name}" data-preis="${sauce.preis}"/>
                        <label for="${sauce.name}">${sauce.name}</label>
                        <br>
                        `;
                }
                angebot += fieldset;
            }
            angebot += `</fieldset> `;
            if (EISDEALER == "wOb") {
                let wOb: AUSWAHL[] = data[EISDEALER];
                let fieldset: string =
                    `
                    <fieldset id="wOb">
                    <legend>Waffel oder Becher?</legend>`;
                for (let i: number = 0; i < wOb.length; i++) {
                    let behälter: AUSWAHL = wOb[i];
                    fieldset +=
                        `                   
                        <input type="radio" name="${behälter.name}" value="${behälter.name}" id="${behälter.name}" data-preis="${behälter.preis}"/>
                        <label for="${behälter.name}">${behälter.name}</label>
                        <br>`;
                }
                angebot += fieldset;
            }

            document.getElementById("fieldset").innerHTML = angebot;
        }

    }
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
                    zusammenFassung = zusammenFassung + anzahl + " " + input.name + "\r\n";
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
    
    function sendRequestWithCustomData(url: string): void {
        console.log("sendRequest");
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        console.log("request sended");
    }
    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("submitÜbersicht").innerHTML = xhr.response;
        }
    }
    
    function order(): void {
        console.log("order...");
        let url: string = "command=order?eissorte=";
        let eissortenInputs: NodeListOf<HTMLInputElement>;
        eissortenInputs = document.querySelectorAll("[data-type=\"eissorte\"]");
        for (let i: number = 0; i < eissortenInputs.length; i++) {
            let input: HTMLInputElement = eissortenInputs[i];
            //wenn der typ der input elemente number ist (=eissorten) und die anzahl größer null ist dann soll dies in die URL hinzugefügt werden
            if (input.value > "0") {
                url += `${input.name}:${input.value}Kugeln&`;
            }
        }
        /*
        for (let i: number = 0; i < inputs.length; i++) {
            debugger;
            let input: HTMLInputElement = inputs[i];
            //wenn der typ der input elemente number ist (=eissorten) und die anzahl größer null ist dann soll dies in die URL hinzugefügt werden
            if (input.type == "number" && input.value > "0") {
                url += `${input.name}:${input.value}Kugeln&`;
            }
            //für radiobutton oder chedckbox
            if (input.checked == true) {
                if (input.type == "checkbox" || input.type == "radio") {
                    url += `${input.name}&`;
                }
            }
        }
        url += preisElement.innerText = String(gesamtPreis.toFixed(2));
        url += `Euro`;
        
        */
        console.log(url);
        sendRequest(url, handleOrderResponse);
    }
    function handleOrderResponse(_event: ProgressEvent): void {
        console.log("ordered");
    }
    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
        console.log("request sended");
    }

}
