/*
Aufgabe: <7>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <07.05.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Eisdealer;
(function (Eisdealer) {
    // Heterogenes assoziatives Array mit vordefinierten Schlüsseln
    Eisdealer.data = {
        "eissorten": [
            { type: "number", name: "eissorte", preis: 1, id: "Schwarze-Vanille", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Sesam-Dattel", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Waldmeister", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Orange-Zartbitter", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Minze-Schoko", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Latte-Macchiato", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Granatapfel", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Erdbeer", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Schokolade", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Vanille", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Straciatella", value: 0 }
        ],
        "toppings": [
            { type: "checkbox", name: "topping", preis: 1.5, id: "Sahne", value: 0 },
            { type: "checkbox", name: "topping", preis: 1.5, id: "Streusel", value: 0 }
        ],
        "saucen": [
            { type: "radio", name: "sauce", preis: 1, id: "Himbeersauce", value: 0 },
            { type: "radio", name: "sauce", preis: 1, id: "Schokolade-weiss-sauce", value: 0 },
            { type: "radio", name: "sauce", preis: 1, id: "Schokoladensauce", value: 0 }
        ],
        "wOb": [
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Waffel", value: 0 },
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Becher", value: 0 }
        ]
    };
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=data.js.map