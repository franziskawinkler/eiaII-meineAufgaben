/*Aufgabe: <12>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <30.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace Unterwasserwelt {
    export class Fish {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x, this.y - 50, this.x + 70, this.y - 50);
            crc.bezierCurveTo(this.x + 70, this.y - 80, this.x + 120, this.y - 70, this.x + 130, this.y - 80);
            crc.lineTo(this.x + 110, this.y - 50);
            crc.quadraticCurveTo(this.x + 160, this.y - 50, this.x + 160, this.y - 10);
            crc.quadraticCurveTo(this.x + 160, this.y - 60, this.x + 210, this.y - 60);
            crc.quadraticCurveTo(this.x + 170, this.y, this.x + 210, this.y + 60);
            crc.quadraticCurveTo(this.x + 160, this.y + 60, this.x + 160, this.y + 10);
            crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 100, this.y + 48);
            crc.quadraticCurveTo(this.x + 90, this.y + 50, this.x + 103, this.y + 88);
            crc.quadraticCurveTo(this.x + 78, this.y + 88, this.x + 78, this.y + 50);
            crc.quadraticCurveTo(this.x + 10, this.y + 50, this.x + 10, this.y + 20);
            crc.quadraticCurveTo(this.x + 20, this.y + 22, this.x + 22, this.y + 17);
            crc.quadraticCurveTo(this.x + 3, this.y + 20, this.x, this.y);
            crc.fillStyle = "purple";
            crc.fill();
            crc.stroke();
            crc.strokeStyle = "purple";
            crc.closePath();


            crc.beginPath();
            crc.arc(this.x + 30, this.y - 20, 4, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
            crc.strokeStyle = "black";
            crc.stroke();
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.x < -80) {
                this.x = 925;
                this.y = Math.random() * 700 - 300;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
}