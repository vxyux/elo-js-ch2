let z = 0;

function countBs(text) {
  return countChar(text, 'B');
}

function countChar(text, letter) {
  let word = text.split(' ').join('');
  for (x = 0; x <= word.length; x++) {
    if (word[x] == letter) {
      z += 1;
    }
  }
  return z;
}

console.log(countBs('B B C'));
console.log(countChar('kakkerlak', 'k'));
console.log(countChar('vermogensrendementsheffing', 'e'));
