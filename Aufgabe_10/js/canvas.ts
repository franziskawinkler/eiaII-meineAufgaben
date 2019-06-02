/*Aufgabe: <10>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <02.06.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace Unterwasserwelt {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawSand();
		drawSea();
		for (let i: number = 0; i < 8; i++) {
			let x: number = Math.random() * (Math.random() * ((900 - 860) + 1)) + 770;
			let y: number = Math.random() * 100;
			drawBubbles(x, y);
		}
		for (let i: number = 0; i < 20; i++) {
			let x: number = Math.random() * (Math.random() * ((900 - 800) + 1)) + 325;
			let y: number = Math.random() * 250;
			drawBubblesL(x, y);
		}
		for (let i: number = 0; i < 250; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
			drawStones(x, y);
		}
		for (let i: number = 0; i < 55; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * (Math.random() * ((400 - 200) + 1)) + 250;
			drawSeagrass(x, y);
		}
		drawTreasure();
		for (let i: number = 0; i < 1; i++) {
			let x: number = 300;
			let y: number = 265;
			drawFishPurple(x, y);
		}
		for (let i: number = 0; i < 3; i++) {
			let x: number = 739;
			let y: number = 120;
			drawFishOrange(x, y);
		}

		drawSpongebob();
		drawSeastar();
	}
	function drawSand(): void {
		let sand: Path2D = new Path2D();
		sand.moveTo(0, 400);
		sand.lineTo(0, 600);
		sand.lineTo(900, 600);
		sand.lineTo(900, 400);
		sand.lineTo(0, 400);
		sand.closePath();
		crc.fillStyle = "rgb(206, 170, 140)";
		crc.fill(sand);
		crc.stroke(sand);

	}
	function drawSea(): void {
		// Create gradient
		let sea: CanvasGradient = crc.createLinearGradient(0, 500, 0, 0);
		sea.addColorStop(0, "rgb(77, 113, 231)");
		sea.addColorStop(1, "rgb(123, 150, 238)");
		// Fill with gradient
		crc.fillStyle = sea;
		crc.fillRect(0, 0, 900, 400);
	}
	function drawBubbles(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x, _y, 6, 0, 2 * Math.PI);
		crc.fillStyle = "blue";
		crc.fill(bubble);
		crc.stroke(bubble);
	}
	function drawBubblesL(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x, _y, 9, 0, 2 * Math.PI);
		crc.fillStyle = "rgb(173, 191, 250)";
		crc.fill(bubble);
		crc.stroke(bubble);
	}
	function drawSeagrass(_x: number, _y: number): void {
		let grass: Path2D = new Path2D();
		crc.fillRect(_x, _y, 10, 150);
		crc.fillStyle = "rgb(104, 180, 97)";
		crc.fill(grass);
		crc.stroke(grass);

	}

	function drawTreasure(): void {
		let treasure: Path2D = new Path2D();
		treasure.moveTo(650, 400);
		treasure.lineTo(650, 350);
		treasure.lineTo(750, 350);
		treasure.lineTo(750, 400);
		treasure.closePath();
		crc.fillStyle = "brown";
		crc.fill(treasure);
		crc.stroke(treasure);
		crc.beginPath();
		crc.arc(700, 375.5, 10, 0, 1 * Math.PI);
		crc.stroke();

	}
	function drawStones(_x: number, _y: number): void {
		let stone: Path2D = new Path2D();
		stone.arc(_x, _y, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(stone);
		crc.stroke(stone);
	}
	function drawFishPurple(_x: number, _y: number): void {
		let purple: Path2D = new Path2D();
		purple.arc(_x, _y, 30, 0, 2 * Math.PI);
		purple.moveTo(250, 250);
		purple.lineTo(250, 275);
		purple.lineTo(275, 262.5);
		purple.lineTo(250, 250);
		purple.closePath();
		crc.fillStyle = "purple";
		crc.fill(purple);
		crc.stroke(purple);

		crc.beginPath();
		crc.arc(305, 255, 4, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill();
		crc.stroke();
	}
	function drawFishOrange(_x: number, _y: number): void {
		let purple: Path2D = new Path2D();
		purple.arc(_x, _y, 30, 0, 2 * Math.PI);
		purple.moveTo(700, 105);
		purple.lineTo(700, 130);
		purple.lineTo(710, 117.5);
		purple.lineTo(700, 105);
		purple.closePath();
		crc.fillStyle = "orange";
		crc.fill(purple);
		crc.stroke(purple);

		crc.beginPath();
		crc.arc(745, 110, 4, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill();
		crc.stroke();
	}
	
	function drawSpongebob(): void {
		let spongi: Path2D = new Path2D;
		spongi.moveTo(50, 350);
		spongi.lineTo(50, 225);
		spongi.lineTo(150, 225);
		spongi.lineTo(150, 350);
		spongi.closePath();
		crc.fillStyle = "gold";
		crc.fill(spongi);
		crc.stroke(spongi);

		spongi.moveTo(65, 350);
		spongi.lineTo(65, 400);
		spongi.lineTo(75, 400);
		spongi.lineTo(75, 350);
		spongi.closePath();
		crc.fillStyle = "gold";
		crc.fill(spongi);
		crc.stroke(spongi);

		spongi.moveTo(135, 350);
		spongi.lineTo(135, 400);
		spongi.lineTo(125, 400);
		spongi.lineTo(125, 350);
		spongi.closePath();
		crc.fillStyle = "gold";
		crc.fill(spongi);
		crc.stroke(spongi);

		crc.beginPath();
		crc.arc(75, 325, 10, 0, 2 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(125, 295, 8, 0, 2 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(133, 245, 7, 0, 2 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(67, 285, 10, 0, 2 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(115, 340, 10, 0, 3 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(85, 240, 10, 0, 2 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(115, 265, 4, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill();
		crc.stroke();

		crc.beginPath();
		crc.arc(85, 265, 4, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill();
		crc.stroke();

		crc.beginPath();
		crc.arc(135, 315, 10, 0, 2 * Math.PI);
		crc.stroke();

		crc.beginPath();
		crc.arc(99, 295, 10, 0, 1 * Math.PI);
		crc.stroke();
	}
	function drawSeastar(): void{
		let star: Path2D = new Path2D;
		star.moveTo(450, 550);
		star.lineTo(475, 488);
		star.lineTo(425, 450);
		star.lineTo(488, 450);
		star.lineTo(512, 400);
		star.lineTo(537, 450);
		star.lineTo(600, 450);
		star.lineTo(550, 488);
		star.lineTo(575, 550);
		star.lineTo(512, 512);
		star.closePath();
		crc.fillStyle = "pink";
		crc.fill(star);
		crc.stroke(star);
	}
	
}
