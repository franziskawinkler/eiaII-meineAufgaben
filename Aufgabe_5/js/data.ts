/*
Aufgabe: <5, Assoziative Arrays: Eisdealer>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <28.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace eisdealer {
    // Heterogenes assoziatives Array mit vordefinierten Schlüsseln
// tslint:disable-next-line: class-name
    export interface inhaltBlock {
        //für radiobutton, checkbox usw.
        type: string;
        //zu welcher Box gehört es? esoorten, toppings usw.
        name: string;
        //wie viel kostet es?
        preis: number;
        //welches Produkt?
        id: string;

    }

    // Homogenes assoziatives Array mit variablen Schlüsseln, 
    // ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
// tslint:disable-next-line: class-name
    export interface eisdealerBlock {
        [key: string]: inhaltBlock[];
    }
    export let data: eisdealerBlock
        = {
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
            { type: "radio", name: "soße", preis: 1, id: "Schokoladensoßen-weiß" },
            { type: "radio", name: "soße", preis: 1, id: "Schokoladensoße" }
        ],
        "wOb": [
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Waffel" },
            { type: "radio", name: "waffelOderBecher", preis: 0, id: "Becher" }
        ]

    };
}