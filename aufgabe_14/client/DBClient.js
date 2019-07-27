var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://eia2-winklerfranziska.herokuapp.com";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let deleteButton = document.getElementById("delete");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        deleteButton.addEventListener("click", remove);
    }
    function insert(_event) {
        let eissorte = document.getElementById("sorte");
        let toppings = document.getElementById("topping");
        let saucen = document.getElementById("sauce");
        let query = "command=insert";
        query += "&sort=" + eissorte.value;
        query += "&toppings=" + toppings.value;
        query += "&sauce=" + saucen.value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    DBClient.insert = insert;
    function refresh(_event) {
        let query = "command=refresh";
        console.log("loadingData");
        sendRequest(query, handleFindResponse);
    }
    DBClient.refresh = refresh;
    function remove() {
    }
    ;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
        console.log("request sended");
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
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
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map