var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var borp = 1;
var i = 0;
var winer = false;
var rs = 0;
var ct = 0;
var cc = 0;
if (localStorage.getItem("KN_WINS_PLAYER") == undefined && localStorage.getItem("KN_LOSE_PLAYER") == undefined && localStorage.getItem("KN_NOT_WIN") == undefined) {
    localStorage.setItem("KN_WINS_PLAYER", 0);
    localStorage.setItem("KN_LOSE_PLAYER", 0);
    localStorage.setItem("KN_NOT_WIN", 0);
}
$("#PlayerWins")[0].innerText = localStorage.getItem("KN_WINS_PLAYER");
$("#BotWins")[0].innerText = localStorage.getItem("KN_LOSE_PLAYER");
$("#NotWin")[0].innerText = localStorage.getItem("KN_NOT_WIN");
var botwins = localStorage.getItem("KN_LOSE_PLAYER")*1;
var playerwins = localStorage.getItem("KN_WINS_PLAYER")*1;
var notwins = localStorage.getItem("KN_NOT_WIN")*1;
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue";
var cells = [
    [
        [0, 2], // column 1
        [0, 2], // column 2
        [0, 2] // column 3
    ], // row 1
    [
        [0, 2], // column 1
        [0, 2], // column 2
        [0, 2] // column 3
    ], // row 2
    [
        [0, 2], // column 1
        [0, 2], // column 2
        [0, 2] // column 3
    ] // row 3
];
var sizeCells = [
    [
        [0, 0, 200, 200],
        [200, 0, 400, 200],
        [400, 0, 600, 200]
    ],
    [
        [0, 200, 200, 400],
        [200, 200, 400, 400],
        [400, 200, 600, 400]
    ],
    [
        [0, 400, 200, 600],
        [200, 400, 400, 600],
        [400, 400, 600, 600]
    ]
];

function drawCell() {
    ctx.fillRect(0, 200, 600, 5);
    ctx.fillRect(0, 400, 600, 5);
    ctx.fillRect(200, 0, 5, 600);
    ctx.fillRect(400, 0, 5, 600);
}

function drawTimes(cell) {
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(cell[0]+10, cell[1]+10);
    ctx.lineTo(cell[2]-10, cell[3]-10);
    ctx.moveTo(cell[2]-10, cell[1]+10);
    ctx.lineTo(cell[0]+10, cell[3]-10);
    ctx.stroke();
}

function drawCircle(cell) {
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(cell[2]/2+cell[0]/2, cell[3]/2+cell[1]/2, 80, 0, Math.PI*2, false);
    ctx.stroke();
}

function randomSign(cell) {
    rs = Math.floor(Math.random()*2);
    if (rs == 0) {
        drawCircle(cell);
    } else if (rs == 1) {
        drawTimes(cell);
    }
    return rs;
}

function drawFinishLine(xStart, yStart, xEnd, yEnd) {
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
}

function printWhoWin(name) {
    if (name == "Вы" && playerwins == Number(localStorage.getItem("KN_WINS_PLAYER"))) {
        $("#whoWin")[0].innerText = name+" победили!";
        localStorage.setItem("KN_WINS_PLAYER", Number(localStorage.getItem("KN_WINS_PLAYER"))+1);
    } else if (name == "Бот" && botwins == Number(localStorage.getItem("KN_LOSE_PLAYER"))) {
        $("#whoWin")[0].innerText = name+" победил!";
        localStorage.setItem("KN_LOSE_PLAYER", Number(localStorage.getItem("KN_LOSE_PLAYER"))+1);
    } else if (name == "Ничья!" && notwins == Number(localStorage.getItem("KN_NOT_WIN"))) {
        $("#whoWin")[0].innerText = name;
        localStorage.setItem("KN_NOT_WIN", Number(localStorage.getItem("KN_NOT_WIN"))+1);
    }
    winer = true;
    setTimeout(()=>{
        location.href = location.href;
    }, 1000)
}

drawCell();

function clearCells() {
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < cells[i].length; j++) {
            cells[i][j][0] = 0;
            cells[i][j][1] = 2;
        }
    }
    $("#whoWin")[0].innerText = "";
}

setInterval(()=>{
    if (cells[0][0][1] == 1 && cells[0][1][1] == 1 && cells[0][2][1] == 1) { // row 0
        printWhoWin("Вы")
        drawFinishLine(100, 100, 500, 100);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][0][1] == 0 && cells[0][1][1] == 0 && cells[0][2][1] == 0) { // row 0
        printWhoWin("Бот")
        drawFinishLine(100, 100, 500, 100);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[1][0][1] == 1 && cells[1][1][1] == 1 && cells[1][2][1] == 1) { // row 1
        printWhoWin("Вы")
        drawFinishLine(100, 300, 500, 300);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[1][0][1] == 0 && cells[1][1][1] == 0 && cells[1][2][1] == 0) { // row 1
        printWhoWin("Бот")
        drawFinishLine(100, 300, 500, 300);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[2][0][1] == 1 && cells[2][1][1] == 1 && cells[2][2][1] == 1) { // row 2
        printWhoWin("Вы")
        drawFinishLine(100, 500, 500, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[2][0][1] == 0 && cells[2][1][1] == 0 && cells[2][2][1] == 0) { // row 2
        printWhoWin("Бот")
        drawFinishLine(100, 500, 500, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][0][1] == 1 && cells[1][0][1] == 1 && cells[2][0][1] == 1) { // column 0
        printWhoWin("Вы")
        drawFinishLine(100, 100, 100, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][0][1] == 0 && cells[1][0][1] == 0 && cells[2][0][1] == 0) { // column 0
        printWhoWin("Бот")
        drawFinishLine(100, 100, 100, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][1][1] == 1 && cells[1][1][1] == 1 && cells[2][1][1] == 1) { // column 1
        printWhoWin("Вы")
        drawFinishLine(300, 100, 300, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][1][1] == 0 && cells[1][1][1] == 0 && cells[2][1][1] == 0) { // column 1
        printWhoWin("Бот")
        drawFinishLine(300, 100, 300, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][2][1] == 1 && cells[1][2][1] == 1 && cells[2][2][1] == 1) { // column 2
        printWhoWin("Вы")
        drawFinishLine(500, 100, 500, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][2][1] == 0 && cells[1][2][1] == 0 && cells[2][2][1] == 0) { // column 2
        printWhoWin("Бот")
        drawFinishLine(500, 100, 500, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][0][1] == 1 && cells[1][1][1] == 1 && cells[2][2][1] == 1) { // diagonal 0, 1, 2
        printWhoWin("Вы")
        drawFinishLine(100, 100, 500, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[0][0][1] == 0 && cells[1][1][1] == 0 && cells[2][2][1] == 0) { // diagonal 0, 1, 2
        printWhoWin("Бот")
        drawFinishLine(100, 100, 500, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[2][0][1] == 1 && cells[1][1][1] == 1 && cells[0][2][1] == 1) { // diagonal 2, 1, 0
        printWhoWin("Вы")
        drawFinishLine(500, 100, 100, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    } else if (cells[2][0][1] == 0 && cells[1][1][1] == 0 && cells[0][2][1] == 0) { // diagonal 2, 1, 0
        printWhoWin("Бот")
        drawFinishLine(500, 100, 100, 500);
        setTimeout(()=>{
            ctx.clearRect(0, 0, 600, 600);
            drawCell();
            clearCells();
        }, 1000)
    }
    if (borp == 0 && !winer){
        $("#whoMove")[0].innerText = "Бот ходит";
    } else if (borp == 1 && !winer){
        $("#whoMove")[0].innerText = "Ваш ход";
    } else if (winer){
        winer = false;
        borp = 1;
    }
}, 1000)