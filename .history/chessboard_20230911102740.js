// define the size of the chessboard
let size = 8;

let board = '';

// for loop to define the vertical axis
for (let i = 0; i <= size; i++) {
  // for loop to define the horizontal axis
  for (let x = 0; x <= size; x++) {
    // if x and y are both divided by 2: add a space
    if (x % 2 == i % 2) board += ' ';
    // els: print a hash
    else board += '#';
  }
  // when 1 horizontal line is done, add a 
  board += '\n';
}

console.log(board);