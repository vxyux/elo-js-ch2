function reverseArray(arr) {
  const res = [];
  while (arr.length) {
    res.push(arr.pop());
  }
  return res;
}

function reverseArrayInPlace(arr) {
  for (let x = 0; x < arr.length; x++) {
    arr.splice(x, 0, arr.pop());
  }
  return arr;
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]

/*
  Notes:
  reverseArray() creates a new array in which it will get pushed with the last
  value in the array (with pop).

  reverseArrayInPlace() manipulates the array sent and will not create a new one.
  For every value in the array it will first 'splice' to change the first value
  everytime inside the array. As the new value it will once again use the pop.
*/
