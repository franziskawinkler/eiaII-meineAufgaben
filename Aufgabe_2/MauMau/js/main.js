let herzSieben = {
    kartenArt: "herz",
    kartenWert: "Sieben"
};
let herzAcht = {
    kartenArt: "herz",
    kartenWert: "Acht"
};
let herzNeun = {
    kartenArt: "herz",
    kartenWert: "Neun"
};
let herzZehn = {
    kartenArt: "herz",
    kartenWert: "Zehn"
};
let herzOber = {
    kartenArt: "herz",
    kartenWert: "Ober"
};
let herzUnter = {
    kartenArt: "herz",
    kartenWert: "Unter"
};
let herzKönig = {
    kartenArt: "herz",
    kartenWert: "König"
};
let herzAss = {
    kartenArt: "herz",
    kartenWert: "Ass"
};
let pikSieben = {
    kartenArt: "pik",
    kartenWert: "Sieben"
};
let pikAcht = {
    kartenArt: "pik",
    kartenWert: "Acht"
};
let pikNeun = {
    kartenArt: "pik",
    kartenWert: "Neun"
};
let pikZehn = {
    kartenArt: "pik",
    kartenWert: "Zehn"
};
let pikOber = {
    kartenArt: "pik",
    kartenWert: "Ober"
};
let pikUnter = {
    kartenArt: "pik",
    kartenWert: "Unter"
};
let pikKönig = {
    kartenArt: "pik",
    kartenWert: "König"
};
let pikAss = {
    kartenArt: "pik",
    kartenWert: "Ass"
};
let kreuzSieben = {
    kartenArt: "kreuz",
    kartenWert: "Sieben",
};
let kreuzAcht = {
    kartenArt: "kreuz",
    kartenWert: "Acht"
};
let kreuzNeun = {
    kartenArt: "kreuz",
    kartenWert: "Neun"
};
let kreuzZehn = {
    kartenArt: "kreuz",
    kartenWert: "Zehn"
};
let kreuzOber = {
    kartenArt: "kreuz",
    kartenWert: "Ober"
};
let kreuzUnter = {
    kartenArt: "kreuz",
    kartenWert: "Unter"
};
let kreuzKönig = {
    kartenArt: "kreuz",
    kartenWert: "König"
};
let kreuzAss = {
    kartenArt: "kreuz",
    kartenWert: "Ass"
};
let karoSieben = {
    kartenArt: "karo",
    kartenWert: "Sieben"
};
let karoAcht = {
    kartenArt: "karo",
    kartenWert: "Acht"
};
let karoNeun = {
    kartenArt: "karo",
    kartenWert: "Neun"
};
let karoZehn = {
    kartenArt: "karo",
    kartenWert: "Zehn"
};
let karoOber = {
    kartenArt: "karo",
    kartenWert: "Ober"
};
let karoUnter = {
    kartenArt: "karo",
    kartenWert: "Unter"
};
let karoKönig = {
    kartenArt: "karo",
    kartenWert: "König"
};
let karoAss = {
    kartenArt: "karo",
    kartenWert: "Ass"
};
/*Array mit allen vorhandenen Spielkarten anlegen*/
let komplettesKartenset = [herzSieben, herzAcht, herzNeun, herzZehn, herzOber, herzUnter, herzKönig, herzAss, karoSieben, karoAcht, karoNeun, karoZehn, karoOber, karoUnter, karoKönig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzOber, kreuzUnter, kreuzKönig, kreuzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikOber, pikUnter, pikKönig, pikAss];
/*Array für Handkarten */
let handKarten = [];
let anzahlDerHandkarten = 0;
/*Funktion, um Anfrage beim Laden der Website zu stellen, wie viele Handkarten gezogen werden sollen*/
function anzahlHandkarten() {
    if (anzahlDerHandkarten == 0) {
        /*Variable vom Typ number; prompt-Box mit Anfrage zur Anzahl der Handkarten*/
        let menge = parseInt(prompt("Mit wie vielen Handkarten möchtest du spielen?"));
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
function handkartenAuswählen() {
    console.log('auswählen');
    console.log(anzahlDerHandkarten);
    /*for-Schleife, um alle gewünschten handkarten auslegen zu können */
    for (let i = 0; i < anzahlDerHandkarten; i++) {
        let karte = karteZiehen();
        //HTML als string aufbauen
        //neues DOM Element
        let handKarte = document.createElement("div");
        //html als string einfügen
        let html = `
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
    let karte = karteZiehen();
    let kartenHtml = `
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
        let nachziehen = `
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
function karteZiehen() {
    /*eine beliebige Nummer aus dem Array rasuziehen, um eine beliebige Karte zu gewinnen */
    let random = Math.floor(Math.random() * komplettesKartenset.length);
    console.log('random Number: ' + random);
    let karte = komplettesKartenset[random];
    console.log(karte.kartenWert);
    komplettesKartenset.splice(random, 1);
    console.log(komplettesKartenset.length);
    return karte;
}
//# sourceMappingURL=main.js.map