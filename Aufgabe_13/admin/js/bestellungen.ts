namespace DBClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://eia2-winklerfranziska.herokuapp.com";
    // let serverAddress: string = "https://eia2-testserver.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        refreshButton.addEventListener("click", refresh);
    }
    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}