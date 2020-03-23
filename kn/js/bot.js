function botMove() {
    setTimeout(()=>{
        rowCell = Math.floor(Math.random() * 3);
        columnCell = Math.floor(Math.random() * 3);
        if (cells[rowCell][columnCell][0] != 1){
            cells[rowCell][columnCell][0] = 1;
            cells[rowCell][columnCell][1] = 0;
            drawCircle(sizeCells[rowCell][columnCell]);
            borp = 1;
            $("#canvas").on("click", playerMove);
        } else {
            botMove();
        }
    }, 2000)
}
