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
            { type: "checkbox", name: "eissorte", preis: 1, id: "Schwarze Vanille" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Sesam Dattel" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Waldmeister" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Orange-Zartbitter" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Minze-Schoko" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Latte Macchiato" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Granatapfel" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Erdbeer" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Schokolade" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Vanille" },
            { type: "checkbox", name: "eissorte", preis: 1, id: "Straciatella" }
        ],
        "toppings": [
            { type: "checkbox", name: "topping", preis: 1.5, id: "Sahne" },
            { type: "checkbox", name: "topping", preis: 1.5, id: "Streusel" }
        ],
        "soßen": [
            { type: "radio", name: "soße", preis: 1, id: "Himbeersoße" },
            { type: "radio", name: "soße", preis: 1, id: "weiße Schokolade" },
            { type: "radio", name: "soße", preis: 1, id: "Schokolade" }
        ],
        "wOb": [
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Waffel" },
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Becher" }
        ]
    };
})(eisdealer || (eisdealer = {}));
//# sourceMappingURL=data.js.map