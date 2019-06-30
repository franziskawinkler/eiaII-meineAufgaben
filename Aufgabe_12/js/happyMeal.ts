/*Aufgabe: <12>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <23.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace Unterwasserwelt {
    export class HappyMeal {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let food: Path2D = new Path2D();
            food.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(food);
            crc.strokeStyle = "white";
            crc.stroke(food);
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