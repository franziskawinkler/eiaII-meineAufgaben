"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Endabgabe
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <26.07.2019>
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
const Http = require("http");
const Url = require("url");
const Database = require("./database");
console.log("Starting server");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
//	server.addListener("request", handleAdminRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port:" + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    let query = Url.parse(_request.url, true).query;
    let command = query["command"];
    switch (command) {
        case "insert":
            let eisdealer = {
                type: query["type"],
                name: query["name"],
                preis: parseInt(query["preis"]),
                id: query["id"],
                value: parseInt(query["value"])
            };
            console.log(eisdealer.name);
            Database.insert(eisdealer);
            respond(_response, "storing data");
            break;
        case "refresh":
            console.log('refresh');
            Database.findAll(findCallback);
            break;
        case "remove":
            let remove = {
                id: query["id"],
                type: query["type"]
            };
            Database.remove(remove);
            respond(_response, "removing data");
            break;
        case "order":
            let order = {
                icecreamType: query["eissorte"],
                toppings: query["topping"],
                dip: query["sauce"],
                cone: query["behälter"],
                preis: query["preis"]
            };
            Database.insertOrder(order);
            respond(_response, "storing data");
            break;
        case "loadOrder":
            Database.loadOrder(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    function findCallback(json) {
        respond(_response, json);
    }
    function respond(_response, _text) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("");
        //let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        _response.write(_text);
        console.log(_request.url);
        _response.end();
    }
}
//# sourceMappingURL=server.js.map