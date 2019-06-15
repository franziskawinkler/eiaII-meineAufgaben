/*Aufgabe: <11>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <06.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace Unterwasserwelt {
    export class Bubble {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc.fillStyle = "blue";
            crc.fill(bubble);
            crc.strokeStyle = "blue";
            crc.stroke(bubble);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
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
}