import * as Http from "http";
import * as Url from "url";
import * as Database from "./database";
console.log("Starting server");
let port: number = Number(process.env.PORT);
if (!port)
	port = 8100;

let server: Http.Server = Http.createServer();

server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
//	server.addListener("request", handleAdminRequest);
server.listen(port);

function handleListen(): void {
	console.log("Listening on port:" + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
	console.log("Request received");
	let query: AssocStringString = <AssocStringString>Url.parse(_request.url, true).query;
	let command: string = query["command"];
	
	switch (command) {
		case "insert":
			let eisdealer: EISDEALER = {
				type: query["type"],
				name: query["name"],
				preis: parseInt(query["preis"]),
				id: query["id"],
				value: parseInt(query["value"])
			};
			Database.insert(eisdealer);
			respond(_response, "storing data");
			break;
		case "refresh":
			Database.findAll(findCallback);
			break;
			//case "order":
		//	let save: ORDER = {
		//		schwarzeVanille: query["Schwarze-Vanille"],
		//		sesamDattel: query["Sesam-Dattel"],
		//		waldmeister: query["Waldmeister"],
		//		orangeZartbitter: query["Orange-Zartbitter"],
		//		minzeSchoko: query["Minze-Schoko"],
		//		latteMacchiato: query["Latte-Macchiato"],
		//		granatapfel: query["Granatapfel"],
		//		erdbeer: query["Erdbeer"],
		//		schokolade: query["Schokolade"],
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
	function findCallback(json: string): void {
		respond(_response, json);
	}
	function respond(_response: Http.ServerResponse, _text: string): void {
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




