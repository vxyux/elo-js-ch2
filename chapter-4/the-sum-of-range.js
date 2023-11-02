function range(start, end, step) {
  if (start < end && step < 0) {
    [start, end] = [end, start];
  }
  if (step == null) step = 1;
  var result = [];

  if (step > 0) {
    for (var x = start; x <= end; x += step) {
      result.push(x);
    }
  } else {
    for (var x = start; x >= end; x += step) {
      result.push(x);
    }
  }
  return result;
}

function sum(arr) {
  var sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(range(1, 10));
// → [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(5, 2, -1));
// → [ 5, 4, 3, 2 ]
console.log(sum(range(1, 10)));
// → 55

/*
  Notes:
  The range() function returns all the numbers in between 2 params.
  It first determines if the first param is smaller than the second param, if that
  were to be the case it will use a 'destructuring assignment' to swap them around.
  The step (an optional param) allows the x to count either back or forward. Each
  loop pushes a new value into the result array.

  When backwards counting is expected but the step is positive ->
  it will return an empty array.

  The sum() function will unpack the array param and count all the values with
  eachother. The unpacking involves a forEach() loop that goes through each value.
*/
