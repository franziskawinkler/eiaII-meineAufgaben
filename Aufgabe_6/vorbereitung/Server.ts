/*
Aufgabe: <6>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <01.05.2019>*/
import * as Http from "http"; //Erstellen eines http-Obejektes im Code, damit der Interpreter nach jedmöglichem Import zu dem http-Objekt suchen kann, um es schließlich nacheinander dem http-Objekt in dem Code hinzuzufügen -Quelle stackOverflow

namespace L05_Server { //namespace L05_Server wird geöffnet
	console.log("Starting server"); //auf der Konsole wird "Starting server" ausgegeben
	let port: number = Number(process.env.PORT); // die Variable port des typ number speichert einen string (process.env.PORT), der zur number umgewandelt wird; der string weist den server darauf hin, auf welchen listening port er hören soll - Quelle stackoverflow
	if (!port) //wenn die vorher deklarierte Variable port nicht zutrifft, dann soll der folgende port verwendet werden 
		port = 8100; //die Variable port wird mit der number 8100 überschrieben

	let server: Http.Server = Http.createServer(); //die Variable server wird mit dem typ Http.server deklariert und baut einen neuen Server als http
	server.addListener("request", handleRequest); //es wird ein listener auf dem server erstellt und die Funktion handleRequest wird ausgeführt, wenn estwas angefordert wird
	server.addListener("listening", handleListen); //es wird ein weiterer listener auf dem server erstellt und die Funktion hanldeListen wird ausgeführt, wenn listening zutrifft 
	server.listen(port); //die variable server soll auf die variable port hören 

	function handleListen(): void { //die Funktion handleListen, startet. Die Funktion empfängt und übergibt keine Werte.
		console.log("Listening"); //auf der Konsole wird "listening" ausgegeben
	}//die Funktion wird geschlossen

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //die Funktion handleRequest wird gestartet. Sie empfängt zwei Werte (_request: Übergabe der Anfrage, _response: warten auf Antwort) und hat keinen Rückgabewert.
		console.log("I hear voices!"); //auf der Konsole wird "I hear voices!" ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8"); //der header wir in response geschrieben, auch wenn er schon vorhanden ist (name, wert/value) - Quelle nodejs.org
		_response.setHeader("Access-Control-Allow-Origin", "*"); //der header wir in response geschrieben, auch wenn er schon vorhanden ist (name, wert/value) - Quelle nodejs.org

		_response.write(_request.url); //die URL wird in response und durch request geschrieben
		console.log(_request.url); //eingegebenen Text auf terminal ausgeben
		_response.end(); //schließt response ab und signalisert dem server, vollständig zu sein
	} //die Funktion wird geschlossen
} //namespace wird geschlossen