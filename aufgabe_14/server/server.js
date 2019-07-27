"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./database");
var Eisdealer;
(function (Eisdealer) {
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
        function findCallback(json) {
            respond(_response, json);
        }
        function respond(_response, _text) {
            console.log("I hear voices!");
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write("");
            let url = Url.parse(_request.url, true);
            for (let key in url.query)
                _response.write("<p>" + key + url.query[key] + "</p>");
            console.log(_request.url);
            _response.end();
        }
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=server.js.map