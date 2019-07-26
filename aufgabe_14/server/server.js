"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
//import * as Database from "./database";
var Server;
(function (Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    //server.addListener("request", handleAdminRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening on port:" + port);
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("folgende Bestellung ist auf dem Server eingegangen:");
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write("<p>" + key + url.query[key] + "</p>");
        console.log(_request.url);
        _response.end();
    }
    //function handleAdminRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    //	console.log("Request received");
    //	let query: AssocStringString = <AssocStringString>Url.parse(_request.url, true).query;
    //	let command: string = query["command"];
    //	switch (command) {
    //		case "insert":
    //			let eisdealer: EISDEALER = {
    //				eissorten: query["name"],
    //				toppings: query["topping"],
    //				saucen: query["sauce"]
    //			};
    //			Database.insert(eisdealer);
    //			respond(_response, "storing data");
    //			break;
    //		case "refresh":
    //			Database.findAll(findCallback);
    //			break;
    //		default:
    //			respond(_response, "unknown command: " + command);
    //			break;
    //	}
    // findCallback is an inner function so that _response is in scope
    //	function findCallback(json: string): void {
    //		respond(_response, json);
    //	}
    //}
    //function respond(_response: Http.ServerResponse, _text: string): void {
    //console.log("Preparing response: " + _text);
    //	_response.setHeader("Access-Control-Allow-Origin", "*");
    //	_response.setHeader("content-type", "text/html; charset=utf-8");
    //	_response.write(_text);
    //	_response.end();
    //	}
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map