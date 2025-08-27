const prompt = require("prompt-sync")()



function makeMove(turn, board){
    while (true) {
    const row = parseInt(prompt ("Enter the row (0-2):"))
    const col = parseInt(prompt ("Enter the column (0-2):"))

    if (isNaN(row)|| isNaN(col)||row<1|| row>3 || col<1 || col>3) 
        console.log("Invalid move. Please enter a row and column between 0 and 2.")
    else if (board[row-1][col-1] !== " ") console.log("Invalid Position")
    else {
        board[row-1][col-1] = turn;
        break
    }    
 }
}
function printBoard(board){
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        let rowString = "  ";
        for (let j= 0; j < row.length; j++) {
            rowString += row[j]
            if (j !== row.length - 1) rowString += "  |  ";
        }
        console.log(rowString);
        if( i !==board.length - 1) console.log("-----------------")
    }
}

function checkWinner(board,turn) {
    const lines = [
        [[0, 0], [0, 1], [0, 2]], // Row 1
        [[1, 0], [1, 1], [1, 2]], // Row 2
        [[2, 0], [2, 1], [2, 2]], // Row 3
        [[0, 0], [1, 0], [2, 0]], // Column 1
        [[0, 1], [1, 1], [2, 1]], // Column 2
        [[0, 2], [1, 2], [2, 2]], // Column 3
        [[0, 0], [1, 1], [2, 2]], // Diagonal \
        [[0, 2], [1, 1], [2, 0]] // Diagonal /
    ]
    for (let line of lines) {
        let win = true;
        for (let pos of line) {
            const [row, col] = pos;
            if (board[row][col] !== turn) {
                win = false;
                break;
            }
        }
        if (win) return true;
    }
    return false;
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn = "X";
let turnCount = 0;

printBoard(board);
console.log("Welcome to Tic Tac Toe!");

while (turnCount < 9) {
    makeMove(turn, board);
    printBoard(board);
    console.log()
    const win= checkWinner(board, turn);
    if (win) {
        console.log(`Player ${turn} wins!`);
        break;
    }

    if (turn === "X") turn = "O"
    else turn = "X"
    turnCount++;
}

if (turnCount === 9)
console.log("Game Over!");
