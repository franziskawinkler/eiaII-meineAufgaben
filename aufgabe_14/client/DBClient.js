var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    let serverAddress = "https://eia2-winklerfranziska.herokuapp.com";
    function init(_event) {
        console.log("Inits");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let deleteButton = document.getElementById("deleteButton");
        let showOrdersButton = document.getElementById("show");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        deleteButton.addEventListener("click", remove);
        showOrdersButton.addEventListener("click", loadOrders);
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
    function loadOrders() {
        let query = "command=loadOrder";
        sendRequest(query, handleLoadOrderResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
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
    function handleLoadOrderResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("order").innerHTML = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
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
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=DBClient.js.map