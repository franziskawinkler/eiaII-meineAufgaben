/*Aufgabe: <11>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <06.06.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Unterwasserwelt;
(function (Unterwasserwelt) {
    class Fish {
        draw() {
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.moveTo(this.x, this.y);
            Unterwasserwelt.crc.quadraticCurveTo(this.x, this.y - 50, this.x + 70, this.y - 50);
            Unterwasserwelt.crc.bezierCurveTo(this.x + 70, this.y - 80, this.x + 120, this.y - 70, this.x + 130, this.y - 80);
            Unterwasserwelt.crc.lineTo(this.x + 110, this.y - 50);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 160, this.y - 50, this.x + 160, this.y - 10);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 160, this.y - 60, this.x + 210, this.y - 60);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 170, this.y, this.x + 210, this.y + 60);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 160, this.y + 60, this.x + 160, this.y + 10);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 100, this.y + 48);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 90, this.y + 50, this.x + 103, this.y + 88);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 78, this.y + 88, this.x + 78, this.y + 50);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 10, this.y + 50, this.x + 10, this.y + 20);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 20, this.y + 22, this.x + 22, this.y + 17);
            Unterwasserwelt.crc.quadraticCurveTo(this.x + 3, this.y + 20, this.x, this.y);
            Unterwasserwelt.crc.fillStyle = "purple";
            Unterwasserwelt.crc.fill();
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.strokeStyle = "purple";
            Unterwasserwelt.crc.closePath();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(this.x + 30, this.y - 20, 4, 0, 2 * Math.PI);
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
            if (this.x < -80) {
                this.x = 925;
                this.y = Math.random() * 700 - 300;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Unterwasserwelt.Fish = Fish;
})(Unterwasserwelt || (Unterwasserwelt = {}));
//# sourceMappingURL=fish.js.map