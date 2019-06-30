/*Aufgabe: <12>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <30.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace Unterwasserwelt {
    export class Aal {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x, this.y - 5, this.x + 5, this.y - 5);
            crc.bezierCurveTo(this.x + 25, this.y - 15, this.x + 55, this.y - 4, this.x + 65, this.y - 5);
            crc.quadraticCurveTo(this.x + 70, this.y - 5, this.x + 72, this.y);
            crc.quadraticCurveTo(this.x + 72, this.y + 5, this.x + 65, this.y + 5);
            crc.bezierCurveTo(this.x + 50, this.y + 8, this.x + 25, this.y - 4, this.x + 5, this.y + 5);
            crc.quadraticCurveTo(this.x, this.y + 5, this.x, this.y);
            crc.fillStyle = "grey";
            crc.fill();
            crc.stroke();
            crc.closePath();

            crc.beginPath();
            crc.arc(this.x + 65, this.y - 5, 4, 0, 2 * Math.PI);
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
            if (this.x > 1000) {
                this.y = Math.random() * 600 - 200;
                this.x = 0; 
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    }
