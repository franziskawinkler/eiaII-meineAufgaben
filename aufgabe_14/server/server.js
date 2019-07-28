"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                id: query["id"]
            };
            Database.remove(remove);
            respond(_response, "storing data");
            break;
        case "order":
            let order = {
                icecreamType: query["eissorte"]
            };
            Database.insertOrder(order);
            respond(_response, "storing data");
            break;
        //		let save: EISDEALER = {
        //			schwarzeVanille: query["Schwarze-Vanille"],
        //			sesamDattel: query["Sesam-Dattel"],
        //			waldmeister: query["Waldmeister"],
        //			orangeZartbitter: query["Orange-Zartbitter"],
        //			minzeSchoko: query["Minze-Schoko"],
        //			latteMacchiato: query["Latte-Macchiato"],
        //			granatapfel: query["Granatapfel"],
        //		erdbeer: query["Erdbeer"],
        ///			schokolade: query["Schokolade"],
        //		vanille: query["Vanille"],
        //		straciatella: query["Straciatella"],
        //		sahne: query["Sahne"],
        //		streusel: query["Streusel"],
        //		himbeersauce: query["Himbeersauce"],
        //		schokoladeWeissSauce: query["Schokolade-weiss-sauce"],
        //		schokoladensauce: query["Schokoladensauce"],
        //		waffel: query["Waffel"],
        //		becher: query["Becher"]
        //	};
        //	Database.insert(save);
        //	respond(_response, "storing data");
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