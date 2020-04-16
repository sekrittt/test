var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bcorbt = 1;
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
bottMove();
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
    if (bcorbt == 0 && !winer){
        $("#whoMove")[0].innerText = "Нолики ходят";
    } else if (bcorbt == 1 && !winer){
        $("#whoMove")[0].innerText = "Крестики ходят";
    } else if (winer){
        winer = false;
        bcorbt = 1;
    }
}, 1000)
var t = 0;
var c = 0;
var times = [];
var circles = [];
var movesBotc = 0;
var net = null;
function checkCells() {
    times = [];
    circles = [];
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < cells[i].length; j++) {
            if (cells[i][j][0] == 1) {
                if (cells[i][j][1] == 1) {
                    times.push([1, i, j]);
                } else if (cells[i][j][1] == 0) {
                    circles.push([0, i, j]);
                }
            }
        }
    }
}
function botcMove() {
    times = [];
    movesBotc = 0;
    checkCells();
    ic = circles.length;
        for (let i = 0; i < circles.length; i++) {
            if (circles[i+1] !== undefined) {
                if (circles[i][1] == circles[i+1][1]) {
                    for (let k = 0; k < cells[circles[i][1]].length; k++) {
                        if (cells[circles[i][1]][k][0] !== undefined) {
                            if (cells[circles[i][1]][k][0] == 0 && cells[circles[i][1]][k][1] == 2 && movesBotc == 0) {
                                cells[circles[i][1]][k][0] = 1;
                                cells[circles[i][1]][k][1] = 0;
                                drawCircle(sizeCells[circles[i][1]][k]);
                                movesBotc = 1;
                            }
                        }
                    }
                } else if (circles[i][2] == circles[i+1][2]) {
                    for (let k = 0; k < cells.length; k++) {
                        if (cells[k][circles[i][2]][0] !== undefined) {
                            if (cells[k][circles[i][2]][0] == 0 && cells[k][circles[i][2]][1] == 2 && movesBotc == 0) {
                                cells[k][circles[i][2]][0] = 1;
                                cells[k][circles[i][2]][1] = 0;
                                drawCircle(sizeCells[k][circles[i][2]]);
                                movesBotc = 1;
                            }
                        }
                    }
                } else if (cells[circles[i][1]][circles[i][2]][1] == 1) {
                    if (circles[i][1] == 0 && circles[i][2] == 2) { // top-ringht angle
                        for (let r = 0, c = 2; r < cells.length; r++, c--) {
                            if (cells[r][c] !== undefined) {
                                if (cells[c][r][0] == 0 && cells[c][r][1] == 2 && movesBotc == 0) {
                                    cells[c][r][0] = 1;
                                    cells[c][r][1] = 0;
                                    drawCircle(sizeCells[c][r]);
                                    movesBotc = 1;
                                }
                            }
                        }
                    } else if (circles[i][1] == 0 && circles[i][2] == 0) { // top-left angle
                        for (let r = 0, c = 0; r < cells.length; r++, c++) {
                            if (cells[r][c] !== undefined) {
                                if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBotc == 0) {
                                    cells[r][c][0] = 1;
                                    cells[r][c][1] = 0;
                                    drawCircle(sizeCells[r][c]);
                                    movesBotc = 1;
                                }
                            }
                        }
                    } else if (circles[i][1] == 1 && circles[i][2] == 1) { // bottom-right angle
                        if (circles[i+1][1] == 2 && circles[i+1][2] == 0) {
                            for (let r = 2, c = 0; r >= 0; r--, c++) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBotc == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawCircle(sizeCells[r][c]);
                                        movesBotc = 1;
                                    }
                                }
                            }
                        } else if (circles[i+1][1] == 2 && circles[i+1][2] == 2) {
                            for (let r = 2, c = 2; r >= 0; r--, c--) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBotc == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawCircle(sizeCells[r][c]);
                                        movesBotc = 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    if (times.length > 1) {
        for (let i = 0; i < times.length; i++) {
            if (times[i+1] !== undefined) {
                if (times[i][1] == times[i+1][1]) {
                    for (let k = 0; k < cells[times[i][1]].length; k++) {
                        if (cells[times[i][1]][k][0] !== undefined) {
                            if (cells[times[i][1]][k][0] == 0 && cells[times[i][1]][k][1] == 2 && movesBotc == 0) {
                                cells[times[i][1]][k][0] = 1;
                                cells[times[i][1]][k][1] = 0;
                                drawCircle(sizeCells[times[i][1]][k]);
                                movesBotc = 1;
                            }
                        }
                    }
                } else if (times[i][2] == times[i+1][2]) {
                    for (let k = 0; k < cells.length; k++) {
                        if (cells[k][times[i][2]][0] !== undefined) {
                            if (cells[k][times[i][2]][0] == 0 && cells[k][times[i][2]][1] == 2 && movesBotc == 0) {
                                cells[k][times[i][2]][0] = 1;
                                cells[k][times[i][2]][1] = 0;
                                drawCircle(sizeCells[k][times[i][2]]);
                                movesBotc = 1;
                            }
                        }
                    }
                } else if (cells[times[i][1]][times[i][2]][1] == 1) {
                    if (times[i][1] == 0 && times[i][2] == 2) { // top-ringht angle
                        for (let r = 0, c = 2; r < cells.length; r++, c--) {
                            if (cells[r][c] !== undefined) {
                                if (cells[c][r][0] == 0 && cells[c][r][1] == 2 && movesBotc == 0) {
                                    cells[c][r][0] = 1;
                                    cells[c][r][1] = 0;
                                    drawCircle(sizeCells[c][r]);
                                    movesBotc = 1;
                                }
                            }
                        }
                    } else if (times[i][1] == 0 && times[i][2] == 0) { // top-left angle
                        for (let r = 0, c = 0; r < cells.length; r++, c++) {
                            if (cells[r][c] !== undefined) {
                                if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBotc == 0) {
                                    cells[r][c][0] = 1;
                                    cells[r][c][1] = 0;
                                    drawCircle(sizeCells[r][c]);
                                    movesBotc = 1;
                                }
                            }
                        }
                    } else if (times[i][1] == 1 && times[i][2] == 1) { // bottom-right angle
                        if (times[i+1][1] == 2 && times[i+1][2] == 0) {
                            for (let r = 2, c = 0; r >= 0; r--, c++) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBotc == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawCircle(sizeCells[r][c]);
                                        movesBotc = 1;
                                    }
                                }
                            }
                        } else if (times[i+1][1] == 2 && times[i+1][2] == 2) {
                            for (let r = 2, c = 2; r >= 0; r--, c--) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBotc == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawCircle(sizeCells[r][c]);
                                        movesBotc = 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    checkCells();
    ic2 = circles.length;
    if((times.length == 1 || ic == ic2) && movesBotc == 0) {
        randomMovec();
        movesBotc = 1;
    }
    bcorbt = 0;
    i++;
    try {
        bottMove();
    } catch (e) {
        printWhoWin("Ничья!")
    }
    // $("#canvas").on("click", playerMove);
}
ii = 0;
function randomMovec() {
    row = Math.floor(Math.random() * 3);
    col = Math.floor(Math.random() * 3);
    if (cells[row][col][0] == 0 && cells[row][col][1] == 2 && ii !== 9) {
        cells[row][col][0] = 1;
        cells[row][col][1] = 0;
        drawCircle(sizeCells[row][col]);
        ii = 0;
    } else {
        ii++;
        randomMovec();
    }
}

function bottMove() {
    times = [];
    movesBott = 0;
    checkCells();
    ic = times.length;
        for (let i = 0; i < times.length; i++) {
            if (circles[i+1] !== undefined) {
                if (times[i][1] == times[i+1][1]) {
                    for (let k = 0; k < cells[times[i][1]].length; k++) {
                        if (cells[times[i][1]][k][0] !== undefined) {
                            if (cells[times[i][1]][k][0] == 0 && cells[times[i][1]][k][1] == 2 && movesBott == 0) {
                                cells[times[i][1]][k][0] = 1;
                                cells[times[i][1]][k][1] = 0;
                                drawTimes(sizeCells[times[i][1]][k]);
                                movesBott = 1;
                            }
                        }
                    }
                } else if (times[i][2] == times[i+1][2]) {
                    for (let k = 0; k < cells.length; k++) {
                        if (cells[k][times[i][2]][0] !== undefined) {
                            if (cells[k][times[i][2]][0] == 0 && cells[k][times[i][2]][1] == 2 && movesBott == 0) {
                                cells[k][times[i][2]][0] = 1;
                                cells[k][times[i][2]][1] = 0;
                                drawTimes(sizeCells[k][times[i][2]]);
                                movesBott = 1;
                            }
                        }
                    }
                } else if (cells[times[i][1]][times[i][2]][1] == 1) {
                    if (times[i][1] == 0 && times[i][2] == 2) { // top-ringht angle
                        for (let r = 0, c = 2; r < cells.length; r++, c--) {
                            if (cells[r][c] !== undefined) {
                                if (cells[c][r][0] == 0 && cells[c][r][1] == 2 && movesBott == 0) {
                                    cells[c][r][0] = 1;
                                    cells[c][r][1] = 0;
                                    drawTimes(sizeCells[c][r]);
                                    movesBott = 1;
                                }
                            }
                        }
                    } else if (times[i][1] == 0 && times[i][2] == 0) { // top-left angle
                        for (let r = 0, c = 0; r < cells.length; r++, c++) {
                            if (cells[r][c] !== undefined) {
                                if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBott == 0) {
                                    cells[r][c][0] = 1;
                                    cells[r][c][1] = 0;
                                    drawTimes(sizeCells[r][c]);
                                    movesBott = 1;
                                }
                            }
                        }
                    } else if (times[i][1] == 1 && times[i][2] == 1) { // bottom-right angle
                        if (times[i+1][1] == 2 && times[i+1][2] == 0) {
                            for (let r = 2, c = 0; r >= 0; r--, c++) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBott == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawTimes(sizeCells[r][c]);
                                        movesBott = 1;
                                    }
                                }
                            }
                        } else if (times[i+1][1] == 2 && times[i+1][2] == 2) {
                            for (let r = 2, c = 2; r >= 0; r--, c--) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBott == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawTimes(sizeCells[r][c]);
                                        movesBott = 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    if (circles.length > 1) {
        for (let i = 0; i < circles.length; i++) {
            if (circles[i+1] !== undefined) {
                if (circles[i][1] == circles[i+1][1]) {
                    for (let k = 0; k < cells[circles[i][1]].length; k++) {
                        if (cells[circles[i][1]][k][0] !== undefined) {
                            if (cells[circles[i][1]][k][0] == 0 && cells[circles[i][1]][k][1] == 2 && movesBott == 0) {
                                cells[circles[i][1]][k][0] = 1;
                                cells[circles[i][1]][k][1] = 0;
                                drawTimes(sizeCells[circles[i][1]][k]);
                                movesBott = 1;
                            }
                        }
                    }
                } else if (circles[i][2] == circles[i+1][2]) {
                    for (let k = 0; k < cells.length; k++) {
                        if (cells[k][circles[i][2]][0] !== undefined) {
                            if (cells[k][circles[i][2]][0] == 0 && cells[k][circles[i][2]][1] == 2 && movesBott == 0) {
                                cells[k][circles[i][2]][0] = 1;
                                cells[k][circles[i][2]][1] = 0;
                                drawTimes(sizeCells[k][circles[i][2]]);
                                movesBott = 1;
                            }
                        }
                    }
                } else if (cells[circles[i][1]][circles[i][2]][1] == 1) {
                    if (circles[i][1] == 0 && circles[i][2] == 2) { // top-ringht angle
                        for (let r = 0, c = 2; r < cells.length; r++, c--) {
                            if (cells[r][c] !== undefined) {
                                if (cells[c][r][0] == 0 && cells[c][r][1] == 2 && movesBott == 0) {
                                    cells[c][r][0] = 1;
                                    cells[c][r][1] = 0;
                                    drawTimes(sizeCells[c][r]);
                                    movesBott = 1;
                                }
                            }
                        }
                    } else if (circles[i][1] == 0 && circles[i][2] == 0) { // top-left angle
                        for (let r = 0, c = 0; r < cells.length; r++, c++) {
                            if (cells[r][c] !== undefined) {
                                if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBott == 0) {
                                    cells[r][c][0] = 1;
                                    cells[r][c][1] = 0;
                                    drawTimes(sizeCells[r][c]);
                                    movesBott = 1;
                                }
                            }
                        }
                    } else if (circles[i][1] == 1 && circles[i][2] == 1) { // bottom-right angle
                        if (circles[i+1][1] == 2 && circles[i+1][2] == 0) {
                            for (let r = 2, c = 0; r >= 0; r--, c++) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBott == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawTimes(sizeCells[r][c]);
                                        movesBott = 1;
                                    }
                                }
                            }
                        } else if (circles[i+1][1] == 2 && circles[i+1][2] == 2) {
                            for (let r = 2, c = 2; r >= 0; r--, c--) {
                                if (cells[r][c] !== undefined) {
                                    if (cells[r][c][0] == 0 && cells[r][c][1] == 2 && movesBott == 0) {
                                        cells[r][c][0] = 1;
                                        cells[r][c][1] = 0;
                                        drawTimes(sizeCells[r][c]);
                                        movesBott = 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    checkCells();
    ic2 = times.length;
    if((times.length == 1 || ic == ic2) && movesBott == 0) {
        randomMovet();
        movesBott = 1;
    }
    bcorbt = 1;
    i++;
    try {
        botсMove();
    } catch (e) {
        printWhoWin("Ничья!")
    }
    // $("#canvas").on("click", playerMove);
}
ii = 0;
function randomMovet() {
    row = Math.floor(Math.random() * 3);
    col = Math.floor(Math.random() * 3);
    if (cells[row][col][0] == 0 && cells[row][col][1] == 2) {
        cells[row][col][0] = 1;
        cells[row][col][1] = 0;
        drawTimes(sizeCells[row][col]);
        ii = 0;
    } else {
        ii++;
        randomMovet();
    }
}