var isXTurn = true;
var cells = document.querySelectorAll('.cell');
var _loop_1 = function (i) {
    var cell = cells[i];
    // TODO 1 : Click on cell to place piece 
    cell.addEventListener('click', function () {
        if (cell.innerHTML == "") {
            cell.innerHTML = isXTurn ? "X" : "O";
            isXTurn = !isXTurn;
        }
    });
    // TODO 2 : If cell empty, onHover become green
    cell.addEventListener("", function () {
    });
};
for (var i = 0; i < cells.length; i++) {
    _loop_1(i);
}
