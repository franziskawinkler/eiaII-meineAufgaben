var Eisdealer;
(function (Eisdealer) {
    let anzahl = 0;
    let gesamtPreis = 0;
    let inputs;
    let preisElement;
    let zusammenfassungElement;
    let zusammenFassung = "";
    let serverAddress = "https://eia2-winklerfranziska.herokuapp.com";
    window.addEventListener("load", init);
    function init() {
        console.log("init");
        refresh();
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
        document.getElementById("submit").addEventListener("click", schreibeURL);
    }
    function writeHTML(_data) {
        let angebot = "";
        let data = _data;
        for (let EISDEALER in data) {
            if (EISDEALER == "eissorten") {
                let eissorten = data[EISDEALER];
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
            if (EISDEALER == "toppings") {
                let toppings = data[EISDEALER];
                let fieldset = `
                <fieldset id="toppings">
                <legend>Toppings?</legend>
                <p>Preis pro Topping: 1€</p>`;
                for (let i = 0; i < toppings.length; i++) {
                    let topping = toppings[i];
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
            if (EISDEALER == "saucen") {
                let saucen = data[EISDEALER];
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
            if (EISDEALER == "wOb") {
                let wOb = data[EISDEALER];
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
        console.log(zusammenFassung);
    }
    function validateForm() {
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            input.className = "validated";
        }
    }
    function schreibeURL() {
        let url = "https://eia2-winklerfranziska.herokuapp.com/?";
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
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
    function sendRequestWithCustomData(url) {
        console.log("sendRequest");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        console.log("request sended");
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("submitÜbersicht").innerHTML = xhr.response;
        }
    }
    function refresh() {
        let query = "command=refresh";
        console.log("loadingData");
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
        console.log("request sended");
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map