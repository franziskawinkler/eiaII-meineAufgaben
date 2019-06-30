
/*Aufgabe: <12>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <30.06.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Unterwasserwelt {

	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;
	let fishArray: Fish[] = [];
	let bubbleArray: Bubble[] = [];
	let bubbleLargeArray: BubbleLarge[] = [];
	let aalArray: Aal[] = [];
	let happyMealArray: HappyMeal[] = [];
	let fps: number = 30;
	let imageData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawBackground();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		for (let i: number = 0; i < 5; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height - 200;
			let dx: number = Math.random() * 5 - 5;
			let dy: number = 0;
			let fish: Fish;
			fish = new Fish();
			fish.x = x;
			fish.y = y;
			fish.dx = dx;
			fish.dy = dy;
			fishArray.push(fish);
			fish.draw();
			console.log(fish);
		}
		for (let i: number = 0; i < 25; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * 300;
			let dx: number = Math.random() * 0;
			let dy: number = Math.random() * - 3;
			let bubble: Bubble;
			bubble = new Bubble();
			bubble.x = x;
			bubble.y = y;
			bubble.dx = dx;
			bubble.dy = dy;
			bubbleArray.push(bubble);
			bubble.draw();
			console.log(bubble);
		}
		for (let i: number = 0; i < 35; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * 400;
			let dx: number = Math.random() * 0;
			let dy: number = Math.random() * -5;
			let bubbleLarge: BubbleLarge;
			bubbleLarge = new BubbleLarge();
			bubbleLarge.x = x;
			bubbleLarge.y = y;
			bubbleLarge.dx = dx;
			bubbleLarge.dy = dy;
			bubbleLargeArray.push(bubbleLarge);
			bubbleLarge.draw();
			console.log(bubbleLarge);
		}
		for (let i: number = 0; i < 12; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height - 100;
			let dx: number = Math.random() * 5;
			let dy: number = Math.random() * 0;
			let aal: Aal;
			aal = new Aal();
			aal.x = x;
			aal.y = y;
			aal.dx = dx;
			aal.dy = dy;
			aalArray.push(aal);
			aal.draw();
			console.log(aal);
		}
		update();
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < fishArray.length; i++) {
			fishArray[i].update();

		}
		for (let i: number = 0; i < bubbleArray.length; i++) {
			bubbleArray[i].update();
		}
		for (let i: number = 0; i < bubbleLargeArray.length; i++) {
			bubbleLargeArray[i].update();
		}
		for (let i: number = 0; i < aalArray.length; i++) {
			aalArray[i].update();
		}
		for (let i: number = 0; i < happyMealArray.length; i++) {
			happyMealArray[i].update();
		}



	}
	function drawBackground(): void {
		// Create gradient
		let sea: CanvasGradient = crc.createLinearGradient(0, 500, 0, 0);
		sea.addColorStop(0, "rgb(77, 113, 231)");
		sea.addColorStop(1, "rgb(123, 150, 238)");
		// Fill with gradient
		crc.fillStyle = sea;
		crc.fillRect(0, 0, 900, 400);

		let sand: Path2D = new Path2D();
		sand.moveTo(0, 400);
		sand.lineTo(0, 600);
		sand.lineTo(900, 600);
		sand.lineTo(900, 400);
		sand.lineTo(0, 400);
		sand.closePath();
		crc.fillStyle = "rgb(206, 170, 140)";
		crc.fill(sand);
		crc.strokeStyle = "rgb(206, 170, 140)";
		crc.stroke(sand);

		let x: number = Math.random() * canvas.width;
		let y: number = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
		let stone: Path2D = new Path2D();
		stone.arc(x, y, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(stone);
		crc.strokeStyle = "black";
		crc.stroke(stone);
		drawSpongebob();
		for (let i: number = 0; i < 250; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
			drawStones(x, y);

		}
		for (let i: number = 0; i < 45; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
			drawSeagrass(x, y);
		}

		function drawStones(_x: number, _y: number): void {
			let stone: Path2D = new Path2D();
			stone.arc(_x, _y, 2, 0, 2 * Math.PI);
			crc.fillStyle = "black";
			crc.fill(stone);
			crc.strokeStyle = "black";
			crc.stroke(stone);
		}
		function drawSeagrass(_x: number, _y: number): void {
			crc.beginPath();
			crc.moveTo(_x, _y);
			crc.quadraticCurveTo(_x - 20, _y - 16, _x - 22, _y - 37);
			crc.quadraticCurveTo(_x - 10, _y - 30, _x - 3, _y - 20);
			crc.quadraticCurveTo(_x - 20, _y - 48, _x - 18, _y - 68);
			crc.quadraticCurveTo(_x - 8, _y - 52, _x - 3, _y - 28);
			crc.quadraticCurveTo(_x - 2, _y - 38, _x, _y - 38);

			crc.quadraticCurveTo(_x + 2, _y - 38, _x, _y - 38);
			crc.quadraticCurveTo(_x + 8, _y - 52, _x + 3, _y - 28);
			crc.quadraticCurveTo(_x + 20, _y - 48, _x + 22, _y - 68);
			crc.quadraticCurveTo(_x + 10, _y - 30, _x + 3, _y - 20);
			crc.quadraticCurveTo(_x + 20, _y - 16, _x, _y);


			crc.fillStyle = "green";
			crc.fill();
			crc.strokeStyle = "green";
			crc.stroke();
			crc.closePath();

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
			crc.strokeStyle = "gold";
			crc.stroke(spongi);
		}
		}
	}