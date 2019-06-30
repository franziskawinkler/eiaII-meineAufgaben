/*Aufgabe: <11>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <06.06.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Unterwasserwelt;
(function (Unterwasserwelt) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let bubbleArray = [];
    let bubbleLargeArray = [];
    let aalArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Unterwasserwelt.crc = canvas.getContext("2d");
        drawBackground();
        imageData = Unterwasserwelt.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 200;
            let dx = Math.random() * 5 - 5;
            let dy = 0;
            let fish;
            fish = new Unterwasserwelt.Fish();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw();
            console.log(fish);
        }
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 300;
            let dx = Math.random() * 0;
            let dy = Math.random() * -3;
            let bubble;
            bubble = new Unterwasserwelt.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            bubble.draw();
            console.log(bubble);
        }
        for (let i = 0; i < 35; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 400;
            let dx = Math.random() * 0;
            let dy = Math.random() * -5;
            let bubbleLarge;
            bubbleLarge = new Unterwasserwelt.BubbleLarge();
            bubbleLarge.x = x;
            bubbleLarge.y = y;
            bubbleLarge.dx = dx;
            bubbleLarge.dy = dy;
            bubbleLargeArray.push(bubbleLarge);
            bubbleLarge.draw();
            console.log(bubbleLarge);
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            let dx = Math.random() * 5;
            let dy = Math.random() * 0;
            let aal;
            aal = new Unterwasserwelt.Aal();
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
    function update() {
        window.setTimeout(update, 1000 / fps);
        Unterwasserwelt.crc.clearRect(0, 0, canvas.width, canvas.height);
        Unterwasserwelt.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < bubbleLargeArray.length; i++) {
            bubbleLargeArray[i].update();
        }
        for (let i = 0; i < aalArray.length; i++) {
            aalArray[i].update();
        }
    }
    function drawBackground() {
        // Create gradient
        let sea = Unterwasserwelt.crc.createLinearGradient(0, 500, 0, 0);
        sea.addColorStop(0, "rgb(77, 113, 231)");
        sea.addColorStop(1, "rgb(123, 150, 238)");
        // Fill with gradient
        Unterwasserwelt.crc.fillStyle = sea;
        Unterwasserwelt.crc.fillRect(0, 0, 900, 400);
        let sand = new Path2D();
        sand.moveTo(0, 400);
        sand.lineTo(0, 600);
        sand.lineTo(900, 600);
        sand.lineTo(900, 400);
        sand.lineTo(0, 400);
        sand.closePath();
        Unterwasserwelt.crc.fillStyle = "rgb(206, 170, 140)";
        Unterwasserwelt.crc.fill(sand);
        Unterwasserwelt.crc.strokeStyle = "rgb(206, 170, 140)";
        Unterwasserwelt.crc.stroke(sand);
        let x = Math.random() * canvas.width;
        let y = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
        let stone = new Path2D();
        stone.arc(x, y, 2, 0, 2 * Math.PI);
        Unterwasserwelt.crc.fillStyle = "black";
        Unterwasserwelt.crc.fill(stone);
        Unterwasserwelt.crc.strokeStyle = "black";
        Unterwasserwelt.crc.stroke(stone);
        drawSpongebob();
        for (let i = 0; i < 250; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
            drawStones(x, y);
        }
        for (let i = 0; i < 45; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * (Math.random() * ((600 - 400) + 1)) + 400;
            drawSeagrass(x, y);
        }
        function drawStones(_x, _y) {
            let stone = new Path2D();
            stone.arc(_x, _y, 2, 0, 2 * Math.PI);
            Unterwasserwelt.crc.fillStyle = "black";
            Unterwasserwelt.crc.fill(stone);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke(stone);
        }
        function drawSeagrass(_x, _y) {
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.moveTo(_x, _y);
            Unterwasserwelt.crc.quadraticCurveTo(_x - 20, _y - 16, _x - 22, _y - 37);
            Unterwasserwelt.crc.quadraticCurveTo(_x - 10, _y - 30, _x - 3, _y - 20);
            Unterwasserwelt.crc.quadraticCurveTo(_x - 20, _y - 48, _x - 18, _y - 68);
            Unterwasserwelt.crc.quadraticCurveTo(_x - 8, _y - 52, _x - 3, _y - 28);
            Unterwasserwelt.crc.quadraticCurveTo(_x - 2, _y - 38, _x, _y - 38);
            Unterwasserwelt.crc.quadraticCurveTo(_x + 2, _y - 38, _x, _y - 38);
            Unterwasserwelt.crc.quadraticCurveTo(_x + 8, _y - 52, _x + 3, _y - 28);
            Unterwasserwelt.crc.quadraticCurveTo(_x + 20, _y - 48, _x + 22, _y - 68);
            Unterwasserwelt.crc.quadraticCurveTo(_x + 10, _y - 30, _x + 3, _y - 20);
            Unterwasserwelt.crc.quadraticCurveTo(_x + 20, _y - 16, _x, _y);
            Unterwasserwelt.crc.fillStyle = "green";
            Unterwasserwelt.crc.fill();
            Unterwasserwelt.crc.strokeStyle = "green";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.closePath();
        }
        function drawSpongebob() {
            let spongi = new Path2D;
            spongi.moveTo(50, 350);
            spongi.lineTo(50, 225);
            spongi.lineTo(150, 225);
            spongi.lineTo(150, 350);
            spongi.closePath();
            Unterwasserwelt.crc.fillStyle = "gold";
            Unterwasserwelt.crc.fill(spongi);
            Unterwasserwelt.crc.strokeStyle = "gold";
            Unterwasserwelt.crc.stroke(spongi);
            spongi.moveTo(65, 350);
            spongi.lineTo(65, 400);
            spongi.lineTo(75, 400);
            spongi.lineTo(75, 350);
            spongi.closePath();
            Unterwasserwelt.crc.fillStyle = "gold";
            Unterwasserwelt.crc.fill(spongi);
            Unterwasserwelt.crc.strokeStyle = "gold";
            Unterwasserwelt.crc.stroke(spongi);
            spongi.moveTo(135, 350);
            spongi.lineTo(135, 400);
            spongi.lineTo(125, 400);
            spongi.lineTo(125, 350);
            spongi.closePath();
            Unterwasserwelt.crc.fillStyle = "gold";
            Unterwasserwelt.crc.fill(spongi);
            Unterwasserwelt.crc.strokeStyle = "gold";
            Unterwasserwelt.crc.stroke(spongi);
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(75, 325, 10, 0, 2 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(125, 295, 8, 0, 2 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(133, 245, 7, 0, 2 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(67, 285, 10, 0, 2 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(115, 340, 10, 0, 3 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(85, 240, 10, 0, 2 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(115, 265, 4, 0, 2 * Math.PI);
            Unterwasserwelt.crc.fillStyle = "black";
            Unterwasserwelt.crc.fill();
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(85, 265, 4, 0, 2 * Math.PI);
            Unterwasserwelt.crc.fillStyle = "black";
            Unterwasserwelt.crc.fill();
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(135, 315, 10, 0, 2 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
            Unterwasserwelt.crc.beginPath();
            Unterwasserwelt.crc.arc(99, 295, 10, 0, 1 * Math.PI);
            Unterwasserwelt.crc.strokeStyle = "black";
            Unterwasserwelt.crc.stroke();
        }
    }
})(Unterwasserwelt || (Unterwasserwelt = {}));
//# sourceMappingURL=canvas.js.map