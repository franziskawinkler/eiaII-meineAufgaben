/*Endabgabe
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <26.07.2019>
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
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
			console.log(eisdealer.name);
			Database.insert(eisdealer);
			respond(_response, "storing data");
			break;
		case "refresh":
			console.log('refresh');
			Database.findAll(findCallback);
			break;
		case "remove":
			let remove: RemoveObject = {
				id: query["id"],
				type: query["type"]
			};
			Database.remove(remove);
			respond(_response, "removing data");
			break;
		case "order":
				let order: Object = {
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




