/*Aufgabe: <11>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <06.06.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Unterwasserwelt;
(function (Unterwasserwelt) {
    class BubbleLarge {
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            Unterwasserwelt.crc.fillStyle = "rgb(173, 191, 250)";
            Unterwasserwelt.crc.fill(bubble);
            Unterwasserwelt.crc.strokeStyle = "rgb(173, 191, 250)";
            Unterwasserwelt.crc.stroke(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.y < 10) {
                this.x = 150;
                this.y = 350;
                this.x = 0 + (Math.random() * 900);
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Unterwasserwelt.BubbleLarge = BubbleLarge;
})(Unterwasserwelt || (Unterwasserwelt = {}));
//# sourceMappingURL=bubbleLarge.js.map