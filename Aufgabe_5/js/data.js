/*
Aufgabe: <5, Assoziative Arrays: Eisdealer>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <28.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var eisdealer;
(function (eisdealer) {
    eisdealer.data = {
        "eissorten": [
            { type: "number", name: "eissorte", preis: 1, id: "Schwarze Vanille" },
            { type: "number", name: "eissorte", preis: 1, id: "Sesam Dattel" },
            { type: "number", name: "eissorte", preis: 1, id: "Waldmeister" },
            { type: "number", name: "eissorte", preis: 1, id: "Orange-Zartbitter" },
            { type: "number", name: "eissorte", preis: 1, id: "Minze-Schoko" },
            { type: "number", name: "eissorte", preis: 1, id: "Latte Macchiato" },
            { type: "number", name: "eissorte", preis: 1, id: "Granatapfel" },
            { type: "number", name: "eissorte", preis: 1, id: "Erdbeer" },
            { type: "number", name: "eissorte", preis: 1, id: "Schokolade" },
            { type: "number", name: "eissorte", preis: 1, id: "Vanille" },
            { type: "number", name: "eissorte", preis: 1, id: "Straciatella" }
        ],
        "toppings": [
            { type: "checkbox", name: "topping", preis: 1.5, id: "Sahne" },
            { type: "checkbox", name: "topping", preis: 1.5, id: "Streusel" }
        ],
        "soßen": [
            { type: "radio", name: "soße", preis: 1, id: "Himbeersoße" },
            { type: "radio", name: "soße", preis: 1, id: "Schokoladensoßen-weiß" },
            { type: "radio", name: "soße", preis: 1, id: "Schokoladensoße" }
        ],
        "wOb": [
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Waffel" },
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Becher" }
        ]
    };
})(eisdealer || (eisdealer = {}));
//# sourceMappingURL=data.js.map