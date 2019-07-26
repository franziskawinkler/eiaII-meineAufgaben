"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./database");
var Server;
(function (Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("request", handleAdminRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening on port:" + port); //auf der Konsole wird "listening" ausgegeben
    } //die Funktion wird geschlossen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //auf der Konsole wird "I hear voices!" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //der header wir in response geschrieben, auch wenn er schon vorhanden ist (name, wert/value) - Quelle nodejs.org
        _response.setHeader("Access-Control-Allow-Origin", "*"); //der header wir in response geschrieben, auch wenn er schon vorhanden ist (name, wert/value) - Quelle nodejs.org
        //SubmitÜbersicht stylen durch URL.parse
        _response.write("folgende Bestellung ist auf dem Server eingegangen:");
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write("<p>" + key + url.query[key] + "</p>");
        //die URL wird in response und durch request geschrieben
        console.log(_request.url); //eingegebenen Text auf terminal ausgeben
        _response.end(); //schließt response ab und signalisert dem server, vollständig zu sein
    } //die Funktion wird geschlossen
    function handleAdminRequest(_request, _response) {
        console.log("Request received");
        let query = Url.parse(_request.url, true).query;
        let command = query["command"];
        switch (command) {
            case "insert":
                let eisdealer = {
                    eissorten: query["name"],
                    toppings: query["topping"],
                    saucen: query["sauce"]
                };
                Database.insert(eisdealer);
                respond(_response, "storing data");
                break;
            case "refresh":
                Database.findAll(findCallback);
                break;
            default:
                respond(_response, "unknown command: " + command);
                break;
        }
        // findCallback is an inner function so that _response is in scope
        function findCallback(json) {
            respond(_response, json);
        }
    }
    function respond(_response, _text) {
        //console.log("Preparing response: " + _text);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write(_text);
        _response.end();
    }
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map