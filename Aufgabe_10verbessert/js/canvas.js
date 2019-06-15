/*Aufgabe: <10>
Name: <Franziska Winkler>
Matrikel: <260944>
Datum: <02.06.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Unterwasserwelt;
(function (Unterwasserwelt) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawSand();
        drawSea();
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 100;
            drawBubbles(x, y);
        }
        for (let i = 0; i < 35; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 250;
            drawBubblesL(x, y);
        }
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
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 400;
            drawFishPurple(x, y);
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            drawFishOrange(x, y);
        }
        drawSpongebob();
    }
    function drawSand() {
        let sand = new Path2D();
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
    }
    function drawSea() {
        // Create gradient
        let sea = crc.createLinearGradient(0, 500, 0, 0);
        sea.addColorStop(0, "rgb(77, 113, 231)");
        sea.addColorStop(1, "rgb(123, 150, 238)");
        // Fill with gradient
        crc.fillStyle = sea;
        crc.fillRect(0, 0, 900, 400);
    }
    function drawBubbles(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc.fillStyle = "blue";
        crc.fill(bubble);
        crc.strokeStyle = "blue";
        crc.stroke(bubble);
    }
    function drawBubblesL(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x, _y, 9, 0, 2 * Math.PI);
        crc.fillStyle = "rgb(173, 191, 250)";
        crc.fill(bubble);
        crc.strokeStyle = "rgb(173, 191, 250)";
        crc.stroke(bubble);
    }
    function drawSeagrass(_x, _y) {
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
    function drawStones(_x, _y) {
        let stone = new Path2D();
        stone.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(stone);
        crc.strokeStyle = "black";
        crc.stroke(stone);
    }
    function drawFishPurple(_x, _y) {
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x, _y - 50, _x + 70, _y - 50);
        crc.bezierCurveTo(_x + 70, _y - 80, _x + 120, _y - 70, _x + 130, _y - 80);
        crc.lineTo(_x + 110, _y - 50);
        crc.quadraticCurveTo(_x + 160, _y - 50, _x + 160, _y - 10);
        crc.quadraticCurveTo(_x + 160, _y - 60, _x + 210, _y - 60);
        crc.quadraticCurveTo(_x + 170, _y, _x + 210, _y + 60);
        crc.quadraticCurveTo(_x + 160, _y + 60, _x + 160, _y + 10);
        crc.quadraticCurveTo(_x + 150, _y + 30, _x + 100, _y + 48);
        crc.quadraticCurveTo(_x + 90, _y + 50, _x + 103, _y + 88);
        crc.quadraticCurveTo(_x + 78, _y + 88, _x + 78, _y + 50);
        crc.quadraticCurveTo(_x + 10, _y + 50, _x + 10, _y + 20);
        crc.quadraticCurveTo(_x + 20, _y + 22, _x + 22, _y + 17);
        crc.quadraticCurveTo(_x + 3, _y + 20, _x, _y);
        crc.fillStyle = "purple";
        crc.fill();
        crc.stroke();
        crc.strokeStyle = "purple";
        crc.closePath();
        crc.beginPath();
        crc.arc(_x + 30, _y - 20, 4, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill();
        crc.strokeStyle = "black";
        crc.stroke();
    }
    function drawFishOrange(_x, _y) {
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x, _y - 5, _x + 5, _y - 5);
        crc.bezierCurveTo(_x + 25, _y - 15, _x + 55, _y - 4, _x + 65, _y - 5);
        crc.quadraticCurveTo(_x + 70, _y - 5, _x + 72, _y);
        crc.quadraticCurveTo(_x + 72, _y + 5, _x + 65, _y + 5);
        crc.bezierCurveTo(_x + 50, _y + 8, _x + 25, _y - 4, _x + 5, _y + 5);
        crc.quadraticCurveTo(_x, _y + 5, _x, _y);
        crc.fillStyle = "grey";
        crc.fill();
        crc.stroke();
        crc.closePath();
        crc.beginPath();
        crc.arc(_x + 5, _y - 3, 4, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill();
        crc.strokeStyle = "black";
        crc.stroke();
    }
    function drawSpongebob() {
        let spongi = new Path2D;
        spongi.moveTo(50, 350);
        spongi.lineTo(50, 225);
        spongi.lineTo(150, 225);
        spongi.lineTo(150, 350);
        spongi.closePath();
        crc.fillStyle = "gold";
        crc.fill(spongi);
        crc.strokeStyle = "gold";
        crc.stroke(spongi);
        spongi.moveTo(65, 350);
        spongi.lineTo(65, 400);
        spongi.lineTo(75, 400);
        spongi.lineTo(75, 350);
        spongi.closePath();
        crc.fillStyle = "gold";
        crc.fill(spongi);
        crc.strokeStyle = "gold";
        crc.stroke(spongi);
        spongi.moveTo(135, 350);
        spongi.lineTo(135, 400);
        spongi.lineTo(125, 400);
        spongi.lineTo(125, 350);
        spongi.closePath();
        crc.fillStyle = "gold";
        crc.fill(spongi);
        crc.strokeStyle = "gold";
        crc.stroke(spongi);
        crc.beginPath();
        crc.arc(75, 325, 10, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(125, 295, 8, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(133, 245, 7, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(67, 285, 10, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(115, 340, 10, 0, 3 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(85, 240, 10, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(115, 265, 4, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill();
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(85, 265, 4, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill();
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(135, 315, 10, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
        crc.beginPath();
        crc.arc(99, 295, 10, 0, 1 * Math.PI);
        crc.strokeStyle = "black";
        crc.stroke();
    }
})(Unterwasserwelt || (Unterwasserwelt = {}));
//# sourceMappingURL=canvas.js.map