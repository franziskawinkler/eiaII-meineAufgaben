namespace DBClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://eia2-winklerfranziska.herokuapp.com";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let deleteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("delete");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        deleteButton.addEventListener("click", remove);
    }

    export function insert(_event: Event): void {
        let eissorte: EISDEALER[];
        let toppings: EISDEALER[];
        let saucen: EISDEALER[]; 
        let query: string = "command=insert";
        query += "&sort=" + eissorte;
        query += "&toppings=" + toppings;
        query += "&sauce=" + saucen;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(_event: Event): void {
        let query: string = "command=refresh";
        console.log("loadingData");

        sendRequest(query, handleFindResponse);
    }
    function remove() {

    };
    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
        console.log("request sended");
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
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