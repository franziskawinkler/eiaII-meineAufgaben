var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://eia2-winklerfranziska.herokuapp.com";
    // let serverAddress: string = "https://eia2-testserver.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let refreshButton = document.getElementById("refresh");
        refreshButton.addEventListener("click", refresh);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
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
//# sourceMappingURL=bestellungen.js.map