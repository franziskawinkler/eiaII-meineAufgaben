/*
Aufgabe: <2, MauMau>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <07.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
/*Interface für eine Karte*/
interface Karte {
    kartenArt: string;
    kartenWert: string;
}

let herzSieben: Karte = {
    kartenArt: "herz",
    kartenWert: "Sieben"
}

let herzAcht: Karte = {
    kartenArt: "herz",
    kartenWert: "Acht"
}

let herzNeun: Karte = {
    kartenArt: "herz",
    kartenWert: "Neun"
}
let herzZehn: Karte = {
    kartenArt: "herz",
    kartenWert: "Zehn"
}
let herzOber: Karte = {
    kartenArt: "herz",
    kartenWert: "Ober"
}
let herzUnter: Karte = {
    kartenArt: "herz",
    kartenWert: "Unter"
}
let herzKönig: Karte = {
    kartenArt: "herz",
    kartenWert: "König"
}
let herzAss: Karte = {
    kartenArt: "herz",
    kartenWert: "Ass"
}
let pikSieben: Karte = {
    kartenArt: "pik",
    kartenWert: "Sieben"
}
let pikAcht: Karte = {
    kartenArt: "pik",
    kartenWert: "Acht"
}
let pikNeun: Karte = {
    kartenArt: "pik",
    kartenWert: "Neun"
}
let pikZehn: Karte = {
    kartenArt: "pik",
    kartenWert: "Zehn"
}
let pikOber: Karte = {
    kartenArt: "pik",
    kartenWert: "Ober"
}
let pikUnter: Karte = {
    kartenArt: "pik",
    kartenWert: "Unter"
}
let pikKönig: Karte = {
    kartenArt: "pik",
    kartenWert: "König"
}
let pikAss: Karte = {
    kartenArt: "pik",
    kartenWert: "Ass"
}
let kreuzSieben: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Sieben",
}
let kreuzAcht: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Acht"
}
let kreuzNeun: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Neun"
}
let kreuzZehn: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Zehn"
}
let kreuzOber: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Ober"
}
let kreuzUnter: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Unter"
}
let kreuzKönig: Karte = {
    kartenArt: "kreuz",
    kartenWert: "König"
}
let kreuzAss: Karte = {
    kartenArt: "kreuz",
    kartenWert: "Ass"
}
let karoSieben: Karte = {
    kartenArt: "karo",
    kartenWert: "Sieben"
}
let karoAcht: Karte = {
    kartenArt: "karo",
    kartenWert: "Acht"
}
let karoNeun: Karte = {
    kartenArt: "karo",
    kartenWert: "Neun"
}
let karoZehn: Karte = {
    kartenArt: "karo",
    kartenWert: "Zehn"
}
let karoOber: Karte = {
    kartenArt: "karo",
    kartenWert: "Ober"
}
let karoUnter: Karte = {
    kartenArt: "karo",
    kartenWert: "Unter"
}
let karoKönig: Karte = {
    kartenArt: "karo",
    kartenWert: "König"
}
let karoAss: Karte = {
    kartenArt: "karo",
    kartenWert: "Ass"
}


/*Array mit allen vorhandenen Spielkarten anlegen*/
let komplettesKartenset: Karte[] = [herzSieben, herzAcht, herzNeun, herzZehn, herzOber, herzUnter, herzKönig, herzAss, karoSieben, karoAcht, karoNeun, karoZehn, karoOber, karoUnter, karoKönig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzOber, kreuzUnter, kreuzKönig, kreuzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikOber, pikUnter, pikKönig, pikAss];

/*Array für Handkarten */
let handKarten: Karte[] = [];
let anzahlDerHandkarten: number = 0;
/*Funktion, um Anfrage beim Laden der Website zu stellen, wie viele Handkarten gezogen werden sollen*/
function anzahlHandkarten() {
    if (anzahlDerHandkarten == 0) {
        /*Variable vom Typ number; prompt-Box mit Anfrage zur Anzahl der Handkarten*/
        let menge: number = parseInt(prompt("Mit wie vielen Handkarten möchtest du spielen?"));
        if (menge <= 31 && menge >= 1) {
            anzahlDerHandkarten = menge;
            handkartenAuswählen();
        }
        /*wenn Zahl nicht einzuordnen ist, nochmal anfragen */
        else {
            anzahlHandkarten();
        }
        /*Anzahl der Handkarten ausgeben */
        return anzahlDerHandkarten;
    }
}
/*Karten auswählen, zunächst alle Handkarten, danach ablagestapek und nachlegestapel */
function handkartenAuswählen(): void {
    console.log('auswählen')
    console.log(anzahlDerHandkarten);
    /*for-Schleife, um alle gewünschten handkarten auslegen zu können */
    for (let i: number = 0; i < anzahlDerHandkarten; i++) {
        let karte = karteZiehen();

        //HTML als string aufbauen
        //neues DOM Element
        let handKarte = document.createElement("div");
        //html als string einfügen
        let html: string =
            `
        </section>
        <!--2. section für die Handkarten-->
        <section class="handkarten">
            <!--jedes div steht für eine Handkarte-->
            <div class="karte ${karte.kartenArt}">
            <img src="img/${karte.kartenArt}.png">
            <p>${karte.kartenWert}</p>
            </div>
        </section>
        `;
        //auf innerHTML zugreifen
        handKarte.innerHTML = html;
        document.getElementById("handstapel").appendChild(handKarte);
    }
    /* Ablagestapel div erstellen */
    let ablagestapel = document.createElement("div");
/*eine beliebige Karte für den Ablagestapell ziehen, um das Spiel beginnen zu können */
    let karte: Karte = karteZiehen()
    let kartenHtml: string =
        `
            <!--erstes div für den Ablagestapel-->
            <section class="nachziehstapel">
            <div class="karte">
            <img class="article" src="img/${karte.kartenArt}.png">
            <p>${karte.kartenWert}</p>
            </div>
            </section>
        `;
    //auf innerHTML zugreifen
    ablagestapel.innerHTML = kartenHtml;
    document.getElementById("nachlegestapel").appendChild(ablagestapel);
    /*Nachlegestapel erstellen, wenn genügend Karten da sind-> if bedingung */
    if (komplettesKartenset.length > 0) {
        let nachlegestapel = document.createElement("div");

        let nachziehen: string =
            `
        <!--zweites div für den Nachlegestapel-->
        <section class="nachziehstapel">
        <div class="karte">
        </div> 
        </section>
        `;
        //auf innerHTML zugreifen
        nachlegestapel.innerHTML = nachziehen;
        document.getElementById("nachlegestapel").appendChild(nachlegestapel);
    }
}
/*Funktion, um eine beliebige Karte zu ziehen*/
function karteZiehen(): Karte {
    /*eine beliebige Nummer aus dem Array rasuziehen, um eine beliebige Karte zu gewinnen */ 
    let random: number = Math.floor(Math.random() * komplettesKartenset.length);
    console.log('random Number: ' + random);
    let karte = komplettesKartenset[random];
    console.log(karte.kartenWert);

    komplettesKartenset.splice(random, 1);
    console.log(komplettesKartenset.length);
    return karte;
}