var t = 0;
var c = 0;
var times = [];
var circles = [];
var movesBot = 0;
function botMove() {
    times = [];
    movesBot = 0;
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
    if (times.length > 1) {
        for (let i = 0; i < times.length; i++) {
            if (times[i+1] !== undefined) {
                if (times[i][1] == times[i+1][1]) {
                    // console.log("test1");
                    for (let k = 0; k < cells[times[i][1]].length; k++) {
                        if (cells[times[i][1]][k][0] !== undefined) {
                            if (cells[times[i][1]][k][0] == 0 && cells[times[i][1]][k][1] == 2 && movesBot == 0) {
                                cells[times[i][1]][k][0] = 1;
                                cells[times[i][1]][k][1] = 0;
                                drawCircle(sizeCells[times[i][1]][k]);
                                movesBot = 1;
                            }
                        }
                    }
                } else if (times[i][2] == times[i+1][2]) {
                    // console.log("test2");
                    for (let k = 0; k < cells.length; k++) {
                        if (cells[k][times[i][2]][0] !== undefined) {
                            if (cells[k][times[i][2]][0] == 0 && cells[k][times[i][2]][1] == 2 && movesBot == 0) {
                                cells[k][times[i][2]][0] = 1;
                                cells[k][times[i][2]][1] = 0;
                                drawCircle(sizeCells[k][times[i][2]]);
                                movesBot = 1;
                            }
                        }
                    }
                } else if ((times[i][1] !== times[i+1][1]) && (times[i][2] !== times[i+1][2]) && movesBot == 0){
                    randomMove();
                    movesBot = 1;
                }
            }
        }
    } else if(times.length == 1 && movesBot == 0) {
        randomMove();
        movesBot = 1;
    }

    if (circles.length > 1) {
        for (let i = 0; i < circles.length; i++) {
            if (circles[i+1] !== undefined) {
                if (circles[i][1] == circles[i+1][1]) {
                    // console.log("test1");
                    for (let k = 0; k < cells[circles[i][1]].length; k++) {
                        if (cells[circles[i][1]][k][0] !== undefined) {
                            if (cells[circles[i][1]][k][0] == 0 && cells[circles[i][1]][k][1] == 2 && movesBot == 0) {
                                cells[circles[i][1]][k][0] = 1;
                                cells[circles[i][1]][k][1] = 0;
                                drawCircle(sizeCells[circles[i][1]][k]);
                                movesBot = 1;
                            }
                        }
                    }
                } else if (circles[i][2] == circles[i+1][2]) {
                    // console.log("test2");
                    for (let k = 0; k < cells.length; k++) {
                        if (cells[k][circles[i][2]][0] !== undefined) {
                            if (cells[k][circles[i][2]][0] == 0 && cells[k][circles[i][2]][1] == 2 && movesBot == 0) {
                                cells[k][circles[i][2]][0] = 1;
                                cells[k][circles[i][2]][1] = 0;
                                drawCircle(sizeCells[k][circles[i][2]]);
                                movesBot = 1;
                            }
                        }
                    }
                } else if ((circles[i][1] !== circles[i+1][1]) && (circles[i][2] !== circles[i+1][2]) && movesBot == 0){
                    randomMove();
                    movesBot = 1;
                }
            }
        }
    } else if(circles.length == 1 && movesBot == 0) {
        randomMove();
        movesBot = 1;
    }
    borp = 1;
    $("#canvas").on("click", playerMove);
}

function randomMove() {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
        console.log(cells[row][col][0]);
        if (cells[row][col][0] == 0 && cells[row][col][1] == 2) {
            cells[row][col][0] = 1;
            cells[row][col][1] = 0;
            drawCircle(sizeCells[row][col]);
        } else {
            randomMove();
        }
}