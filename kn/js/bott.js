var t = 0;
var c = 0;
var times = [];
var circles = [];
var movesBott = 0;
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
        randomMove();
        movesBott = 1;
    }
    bcorbt = 1;
    i++;
    botcMove();
    // $("#canvas").on("click", playerMove);
}
ii = 0;
function randomMove() {
    row = Math.floor(Math.random() * 3);
    col = Math.floor(Math.random() * 3);
    if (cells[row][col][0] == 0 && cells[row][col][1] == 2 && ii !== 9) {
        cells[row][col][0] = 1;
        cells[row][col][1] = 0;
        drawTimes(sizeCells[row][col]);
        ii = 0;
    } else {
        ii++;
        randomMove();
    }
}