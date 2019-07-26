namespace DBClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "https://eia2-winklerfranziska.herokuapp.com";
    let serverAddress: string = "https://eia2-testserver.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    let preisElement: HTMLSpanElement;
    let gesamtPreis: number = 0;

    function insert(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            //wenn der typ der input elemente number ist (=eissorten) und die anzahl größer null ist dann soll dies in die URL hinzugefügt werden
            if (input.type == "number" && input.value > "0") {
                query += `${input.id}:${input.value}Kugeln&`;
            }
            //für radiobutton oder chedckbox
            if (input.checked == true) {
                if (input.type == "checkbox" || input.type == "radio") {
                    query += `${input.id}&`;
                }
            }
        }
        query += preisElement.innerText = String(gesamtPreis.toFixed(2));
        query += `Euro`;
        console.log(query);
        sendRequest(query, handleInsertResponse);
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