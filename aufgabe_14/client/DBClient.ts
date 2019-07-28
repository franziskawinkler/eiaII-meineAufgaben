namespace Eisdealer {
    window.addEventListener("load", init);
    let serverAddress: string = "https://eia2-winklerfranziska.herokuapp.com";

    function init(_event: Event): void {
        console.log("Inits");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let deleteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteButton");
        let showOrdersButton: HTMLButtonElement =  <HTMLButtonElement>document.getElementById("show");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        deleteButton.addEventListener("click", remove);
        showOrdersButton.addEventListener("click", loadOrders);
        refresh();
    }

    export function insert(_event: Event): void {
        let type: HTMLInputElement = <HTMLInputElement>document.getElementById("type");
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let preis: HTMLInputElement = <HTMLInputElement>document.getElementById("preis"); 
        let id: HTMLInputElement = <HTMLInputElement>document.getElementById("id");
        let value: HTMLInputElement = <HTMLInputElement>document.getElementById("value"); 
        let query: string = "command=insert";
        query += "&type=" + type.value;
        query += "&name=" + name.value;
        query += "&preis=" + preis.value;
        query += "&id=" + id.value;
        query += "&value=" + value.value; 
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    

    export function refresh(): void {
        let query: string = "command=refresh";
        console.log("loadingData");

        sendRequest(query, handleFindResponse);
    }
    function remove(): void {
        let id: HTMLInputElement = <HTMLInputElement>document.getElementById("id");
        let query: string = "command=remove";
        query += "&id=" + id.value;
        console.log(query);
        sendRequest(query, handleRemoveResponse);
    }
    function loadOrders(): void {
        let query: string = "command=loadOrder";
        sendRequest(query, handleLoadOrderResponse);
    }
    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.send();
        console.log("request sended");
    }
    function handleRemoveResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
            refresh();
        }
    }
    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
            refresh();
        }
    
    }
    function handleLoadOrderResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("order").innerHTML = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
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