/*
Aufgabe: <3, interaktives MauMau>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <14.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var MauMau;
(function (MauMau) {
    ;
    let herzSieben = {
        kartenArt: "herz",
        kartenWert: "Sieben",
        platzNummer: 1
    };
    let herzAcht = {
        kartenArt: "herz",
        kartenWert: "Acht",
        platzNummer: 2
    };
    let herzNeun = {
        kartenArt: "herz",
        kartenWert: "Neun",
        platzNummer: 3
    };
    let herzZehn = {
        kartenArt: "herz",
        kartenWert: "Zehn",
        platzNummer: 4
    };
    let herzOber = {
        kartenArt: "herz",
        kartenWert: "Ober",
        platzNummer: 5
    };
    let herzUnter = {
        kartenArt: "herz",
        kartenWert: "Unter",
        platzNummer: 6
    };
    let herzKönig = {
        kartenArt: "herz",
        kartenWert: "König",
        platzNummer: 7
    };
    let herzAss = {
        kartenArt: "herz",
        kartenWert: "Ass",
        platzNummer: 8
    };
    let karoSieben = {
        kartenArt: "karo",
        kartenWert: "Sieben",
        platzNummer: 9
    };
    let karoAcht = {
        kartenArt: "karo",
        kartenWert: "Acht",
        platzNummer: 10
    };
    let karoNeun = {
        kartenArt: "karo",
        kartenWert: "Neun",
        platzNummer: 11
    };
    let karoZehn = {
        kartenArt: "karo",
        kartenWert: "Zehn",
        platzNummer: 12
    };
    let karoOber = {
        kartenArt: "karo",
        kartenWert: "Ober",
        platzNummer: 13
    };
    let karoUnter = {
        kartenArt: "karo",
        kartenWert: "Unter",
        platzNummer: 14
    };
    let karoKönig = {
        kartenArt: "karo",
        kartenWert: "König",
        platzNummer: 15
    };
    let karoAss = {
        kartenArt: "karo",
        kartenWert: "Ass",
        platzNummer: 16
    };
    let pikSieben = {
        kartenArt: "pik",
        kartenWert: "Sieben",
        platzNummer: 17
    };
    let pikAcht = {
        kartenArt: "pik",
        kartenWert: "Acht",
        platzNummer: 18
    };
    let pikNeun = {
        kartenArt: "pik",
        kartenWert: "Neun",
        platzNummer: 19
    };
    let pikZehn = {
        kartenArt: "pik",
        kartenWert: "Zehn",
        platzNummer: 20
    };
    let pikOber = {
        kartenArt: "pik",
        kartenWert: "Ober",
        platzNummer: 21
    };
    let pikUnter = {
        kartenArt: "pik",
        kartenWert: "Unter",
        platzNummer: 22
    };
    let pikKönig = {
        kartenArt: "pik",
        kartenWert: "König",
        platzNummer: 23
    };
    let pikAss = {
        kartenArt: "pik",
        kartenWert: "Ass",
        platzNummer: 24
    };
    let kreuzSieben = {
        kartenArt: "kreuz",
        kartenWert: "Sieben",
        platzNummer: 25
    };
    let kreuzAcht = {
        kartenArt: "kreuz",
        kartenWert: "Acht",
        platzNummer: 26
    };
    let kreuzNeun = {
        kartenArt: "kreuz",
        kartenWert: "Neun",
        platzNummer: 27
    };
    let kreuzZehn = {
        kartenArt: "kreuz",
        kartenWert: "Zehn",
        platzNummer: 28
    };
    let kreuzOber = {
        kartenArt: "kreuz",
        kartenWert: "Ober",
        platzNummer: 29
    };
    let kreuzUnter = {
        kartenArt: "kreuz",
        kartenWert: "Unter",
        platzNummer: 30
    };
    let kreuzKönig = {
        kartenArt: "kreuz",
        kartenWert: "König",
        platzNummer: 31
    };
    let kreuzAss = {
        kartenArt: "kreuz",
        kartenWert: "Ass",
        platzNummer: 32
    };
    /*Array mit allen vorhandenen Spielkarten anlegen*/
    let komplettesKartenset = [herzSieben, herzAcht, herzNeun, herzZehn, herzOber, herzUnter, herzKönig, herzAss, karoSieben, karoAcht, karoNeun, karoZehn, karoOber, karoUnter, karoKönig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzOber, kreuzUnter, kreuzKönig, kreuzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikOber, pikUnter, pikKönig, pikAss];
    /*Array für Handkarten */
    let handKarten = [];
    let anzahlDerHandkarten = 0;
    window.addEventListener("load", init);
    function init() {
        anzahlHandkarten();
        loadEvents();
    }
    //eventlistener
    function loadEvents() {
        document.getElementById("nachziehstapel").addEventListener("click", plusHandkarte);
        document.addEventListener("keydown", event => {
            if (event.keyCode == 32) {
                plusHandkarte();
            }
        });
        document.getElementById("button").addEventListener("click", kartenSortieren);
    }
    function handkarteLegen(event) {
        console.log("legen");
        let karte = event.target;
        let nummer = karte.getAttribute("data-value");
        for (let i = 0; i < handKarten.length; i++) {
            let handKarte = handKarten[i];
            if (handKarte.platzNummer === parseInt(nummer)) {
                handKarten.splice(i, 1);
                kartenSortieren();
                let ablagestapel = document.getElementById("ablagestapel");
                let html = `<img class="article" src="img/${handKarte.kartenArt}.png">
                <p>${handKarte.kartenWert}</p>
                `;
                //auf innerHTML zugreifen
                ablagestapel.innerHTML = html;
            }
        }
    }
    function plusHandkarte() {
        //Check, dass noch karten auf dem stapel übrig sind!
        if (komplettesKartenset.length <= 0) {
            console.log("keine Karten zum Nachziehen vorhanden!");
            document.getElementById("nachziehstapel").innerHTML = "";
        }
        else {
            console.log("plus");
            let gezogeneKarte = karteZiehen();
            handKarten.push(gezogeneKarte);
            karteAbbilden(gezogeneKarte);
        }
    }
    function kartenSortieren() {
        console.log("button clicked");
        handKarten.sort(soSortieren);
        /*alte Karten werden überschrieben */
        document.getElementById("handstapel").innerHTML = "";
        /*Array neu abbilden */
        handKarten.forEach(karte => {
            karteAbbilden(karte);
        });
    }
    /*Karten nach Art und Wert sortieren, dazu platzNummer im Interface hinzugefügt, um die Karten nach ihrem Wert exakt durchzunumemrieren und so sortieren zu können:*/
    function soSortieren(a, b) {
        let sortA = a.platzNummer;
        let sortB = b.platzNummer;
        if (sortA > sortB) {
            return 1;
        }
        if (sortA == sortB) {
            return 0;
        }
        if (sortA < sortB) {
            return -1;
        }
        return 0;
    }
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
        }
    }
    /*Karten auswählen, zunächst alle Handkarten, danach ablagestapel und nachziehstapel */
    function handkartenAuswählen() {
        console.log("auswählen");
        console.log(anzahlDerHandkarten);
        /*for-Schleife, um alle gewünschten handkarten auslegen zu können */
        for (let i = 0; i < anzahlDerHandkarten; i++) {
            let gezogeneKarte = karteZiehen();
            handKarten.push(gezogeneKarte);
            karteAbbilden(gezogeneKarte);
        }
        /* Ablagestapel div erstellen */
        let ablagestapel = document.createElement("div");
        /*eine beliebige Karte für den Ablagestapell ziehen, um das Spiel beginnen zu können */
        let karte = karteZiehen();
        let kartenHtml = `
            <!--erstes div für den Ablagestapel-->
            <section class="stapel">
            <div id="ablagestapel" class="karte">
            <img class="article" src="img/${karte.kartenArt}.png">
            <p>${karte.kartenWert}</p>
            </div>
            </section>
        `;
        //auf innerHTML zugreifen
        ablagestapel.innerHTML = kartenHtml;
        let container = document.getElementById("container");
        container.appendChild(ablagestapel);
        /*nachziehstapel erstellen, wenn genügend Karten da sind-> if bedingung */
        if (komplettesKartenset.length > 0) {
            let nachziehstapel = document.createElement("div");
            let nachziehen = `
                    <!--zweites div für den nachziehstapel-->
                    <section class="stapel">
                    <div id="nachziehstapel" class="karte"></div> 
                    </section>
                    `;
            //auf innerHTML zugreifen
            nachziehstapel.innerHTML = nachziehen;
            container.appendChild(nachziehstapel);
        }
    }
    function karteAbbilden(karte) {
        //HTML als string aufbauen
        //neues DOM Element
        let handKarte = document.createElement("div");
        //html als string einfügen
        let html = `
                <!--2. section für die Handkarten-->
            <section class="handkarten">
                <!--jedes div steht für eine Handkarte-->
                <div id="handkarte" class="karte ${karte.kartenArt}" data-value=${karte.platzNummer}>
                    <img src="img/${karte.kartenArt}.png">
                    <p>${karte.kartenWert}</p>
                 </div>
            </section>
            `;
        //auf innerHTML zugreifen
        handKarte.innerHTML = html;
        document.getElementById("handstapel").appendChild(handKarte);
        handKarte.addEventListener("click", handkarteLegen);
    }
    /*Funktion, um eine beliebige Karte zu ziehen*/
    function karteZiehen() {
        /*eine beliebige Nummer aus dem Array rasuziehen, um eine beliebige Karte zu gewinnen */
        let random = Math.floor(Math.random() * komplettesKartenset.length);
        console.log("random Number: " + random);
        let karte = komplettesKartenset[random];
        console.log(karte.kartenWert);
        komplettesKartenset.splice(random, 1);
        console.log(komplettesKartenset.length);
        return karte;
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=main.js.map