var isXTurn = true;
var cells = document.querySelectorAll('.cell');
var _loop_1 = function (i) {
    var cell = cells[i];
    // TODO 1 : Click on cell to place piece 
    cell.addEventListener('click', function () {
        if (cell.innerHTML === "") {
            cell.innerHTML = isXTurn ? "X" : "O";
            isXTurn = !isXTurn;
            cell.style.cursor = "auto";
        }
    });
    cell.addEventListener('mouseover', function () {
        var existingPiece = cell.innerHTML;
        if (existingPiece === "") {
            // TODO 2 : If cell empty, onHover become green
            cell.style.backgroundColor = "green";
        }
        else {
            // TODO 3 : If cell not empty, onHover become red
            cell.style.backgroundColor = "red";
        }
    });
    cell.addEventListener('mouseleave', function () {
        cell.style.backgroundColor = "white";
    });
    cell.addEventListener('dblclick', function () {
        cell.innerHTML = "";
    });
};
for (var i = 0; i < cells.length; i++) {
    _loop_1(i);
}
