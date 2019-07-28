/*Endabgabe
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <26.07.2019>
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Eisdealer {
    export interface  AUSWAHL {
        type: string;
        preis: number;
        name: string;
        value: number;
    }
   
    export interface EISDEALER {
        [key: string]: AUSWAHL[];
    }
    export let data: EISDEALER
        = {
        "eissorten": [
            { type: "eissorte", preis: 1, name: "Schwarze-Vanille", value: 0 },
            { type: "eissorte", preis: 1, name: "Sesam-Dattel", value: 0  },
            { type: "eissorte", preis: 1, name: "Waldmeister", value: 0 },
            { type: "eissorte", preis: 1, name: "Orange-Zartbitter",  value: 0 },
            { type: "eissorte", preis: 1, name: "Minze-Schoko", value: 0},
            { type: "eissorte", preis: 1, name: "Latte-Macchiato", value: 0 },
            { type: "eissorte", preis: 1, name: "Granatapfel", value: 0 },
            { type: "eissorte", preis: 1, name: "Erdbeer",  value: 0 },
            { type: "eissorte", preis: 1, name: "Schokolade",  value: 0 },
            { type: "eissorte", preis: 1, name: "Vanille",  value: 0 },
            { type: "eissorte", preis: 1, name: "Straciatella", value: 0 }
        ],
        "toppings": [
            { type: "topping", preis: 1.5, name: "Sahne", value: 0 },
            {type: "topping", preis: 1.5, name: "Streusel", value: 0 }
        ],
        "saucen": [
            {type: "sauce", preis: 1, name: "Himbeersauce", value: 0 },
            {type: "sauce", preis: 1, name: "Schokolade-weiss-sauce", value: 0 },
            {type: "sauce", preis: 1, name: "Schokoladensauce", value: 0 }
        ],
        "wOb": [
            { type: "waffelOderBecher", preis: 0, name: "Waffel", value: 0 },
            { type: "waffelOderBecher", preis: 0, name: "Becher", value: 0 }
        ]

    };


}

