/*
Aufgabe: <7>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <07.05.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Eisdealer {
    // Heterogenes assoziatives Array mit vordefinierten Schlüsseln

    export interface INHALTBLOCK {
        //für radiobutton, checkbox usw.
        type: string;
        //zu welcher Box gehört es? esoorten, toppings usw.
        name: string;
        //wie viel kostet es?
        preis: number;
        //welches Produkt?
        id: string;
        value: number;

    }

    // Homogenes assoziatives Array mit variablen Schlüsseln, 
    // ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 

    export interface EISDEALERBLOCK {
        [key: string]: INHALTBLOCK[];
    }
    export let data: EISDEALERBLOCK
        = {
        "eissorten": [
            { type: "number", name: "eissorte", preis: 1, id: "Schwarze-Vanille", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Sesam-Dattel", value: 0  },
            { type: "number", name: "eissorte", preis: 1, id: "Waldmeister", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Orange-Zartbitter",  value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Minze-Schoko", value: 0},
            { type: "number", name: "eissorte", preis: 1, id: "Latte-Macchiato", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Granatapfel", value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Erdbeer",  value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Schokolade",  value: 0 },
            { type: "number", name: "eissorte", preis: 1, id: "Vanille",  value: 0 },
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
}