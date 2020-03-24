$("#canvas").on("click", playerMove);
function playerMove (e) {
    // console.log("X: "+e.offsetX+", Y: "+e.offsetY);
    if (e.offsetX < 200 && e.offsetX > 0 && e.offsetY > 0 && e.offsetY < 200) { // 1
        if (cells[0][0][0] !== 1) {
            cells[0][0][0] = 1;
            drawTimes(sizeCells[0][0]);
            cells[0][0][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 400 && e.offsetX > 200 && e.offsetY > 0 && e.offsetY < 200) { // 2
        if (cells[0][1][0] !== 1) {
            cells[0][1][0] = 1;
            drawTimes(sizeCells[0][1]);
            cells[0][1][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 600 && e.offsetX > 400 && e.offsetY > 0 && e.offsetY < 200) { // 3
        if (cells[0][2][0] !== 1) {
            cells[0][2][0] = 1;
            drawTimes(sizeCells[0][2]);
            cells[0][2][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 200 && e.offsetX > 0 && e.offsetY > 200 && e.offsetY < 400) { // 4
        if (cells[1][0][0] !== 1) {
            cells[1][0][0] = 1;
            drawTimes(sizeCells[1][0]);
            cells[1][0][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 400 && e.offsetX > 200 && e.offsetY > 200 && e.offsetY < 400) { // 5
        if (cells[1][1][0] !== 1) {
            cells[1][1][0] = 1;
            drawTimes(sizeCells[1][1]);
            cells[1][1][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 600 && e.offsetX > 400 && e.offsetY > 200 && e.offsetY < 400) { // 6
        if (cells[1][2][0] !== 1) {
            cells[1][2][0] = 1;
            drawTimes(sizeCells[1][2]);
            cells[1][2][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 200 && e.offsetX > 0 && e.offsetY > 400 && e.offsetY < 600) { // 7
        if (cells[2][0][0] !== 1) {
            cells[2][0][0] = 1;
            drawTimes(sizeCells[2][0]);
            cells[2][0][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 400 && e.offsetX > 200 && e.offsetY > 400 && e.offsetY < 600) { // 8
        if (cells[2][1][0] !== 1) {
            cells[2][1][0] = 1;
            drawTimes(sizeCells[2][1]);
            cells[2][1][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    } else if (e.offsetX < 600 && e.offsetX > 400 && e.offsetY > 400 && e.offsetY < 600) { // 9
        if (cells[2][2][0] !== 1) {
            cells[2][2][0] = 1;
            drawTimes(sizeCells[2][2]);
            cells[2][2][1] = 1;
            borp = 0;
            i++;
        } else {
            console.error("Error this cell is already filled!")
        }
    }
    if (!winer) {
        $("#canvas").off("click", playerMove);
        setTimeout(()=>{
            try {
                botMove();
            } catch (e) {
                printWhoWin("Ничья!");
            }
        },2000)
    }
}