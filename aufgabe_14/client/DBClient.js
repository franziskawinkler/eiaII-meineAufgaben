var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    let serverAddress = "https://eia2-winklerfranziska.herokuapp.com";
    function init(_event) {
        console.log("Inits");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let deleteButton = document.getElementById("deleteButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        deleteButton.addEventListener("click", remove);
        refresh();
    }
    function insert(_event) {
        let type = document.getElementById("type");
        let name = document.getElementById("name");
        let preis = document.getElementById("preis");
        let id = document.getElementById("id");
        let value = document.getElementById("value");
        let query = "command=insert";
        query += "&type=" + type.value;
        query += "&name=" + name.value;
        query += "&preis=" + preis.value;
        query += "&id=" + id.value;
        query += "&value=" + value.value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Eisdealer.insert = insert;
    function order() {
        console.log("order...");
        let url = "command=order?eissorte=";
        let eissortenInputs;
        eissortenInputs = document.querySelectorAll("[data-type=\"eissorte\"]");
        for (let i = 0; i < eissortenInputs.length; i++) {
            let input = eissortenInputs[i];
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
    function refresh() {
        let query = "command=refresh";
        console.log("loadingData");
        sendRequest(query, handleFindResponse);
    }
    Eisdealer.refresh = refresh;
    function remove() {
        let id = document.getElementById("id");
        let query = "command=remove";
        query += "&id=" + id.value;
        console.log(query);
        sendRequest(query, handleRemoveResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
        console.log("request sended");
    }
    function handleRemoveResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
            refresh();
        }
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
            refresh();
        }
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
    function handleOrderResponse(_event) {
        console.log("ordered");
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=DBClient.js.map