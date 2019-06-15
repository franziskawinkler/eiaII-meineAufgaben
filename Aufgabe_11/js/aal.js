/*Aufgabe: <11>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <06.06.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Unterwasserwelt;
(function (Unterwasserwelt) {
    class Aal {
        draw() {
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.moveTo(this.x, this.y);
            Unterwasserwelt.crc.quadraticCurveTo(this.x, this.y - 5, this.x + 5, this.y - 5);
            Unterwasserwelt.crc.bezierCurveTo(this.x + 25, this.y - 15, this.x + 55, this.y - 4, this.x + 65, this.y - 5);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 70, this.y - 5, this.x + 72, this.y);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 72, this.y + 5, this.x + 65, this.y + 5);
            Unterwasserwelt.crc.bezierCurveTo(this.x + 50, this.y + 8, this.x + 25, this.y - 4, this.x + 5, this.y + 5);
            Unterwasserwelt.crc.quadraticCurveTo(this.x, this.y + 5, this.x, this.y);
            Unterwasserwelt.crc.fillStyle = "grey";
            Unterwasserwelt.crc.fill();
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.closePath();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(this.x + 65, this.y - 5, 4, 0, 2 * Math.PI);
            Unterwasserwelt.crc.fillStyle = "black";
            Unterwasserwelt.crc.fill();
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x > 1000) {
                this.y = Math.random() * 600 - 200;
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Unterwasserwelt.Aal = Aal;
})(Unterwasserwelt || (Unterwasserwelt = {}));
//# sourceMappingURL=aal.js.map