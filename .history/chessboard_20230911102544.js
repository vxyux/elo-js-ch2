// define the size of the chessboard
let size = 8;

let board = '';

// for loop to define the ho
for (let i = 0; i <= size; i++) {
  for (let x = 0; x <= size; x++) {
    if (x % 2 == i % 2) board += ' ';
    else board += '#';
  }
  board += '\n';
}

console.log(board);