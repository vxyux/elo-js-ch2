function arrayToList(arr) {
  if (arr.length <= 0) {
    return null;
  }
  return { value: arr[0], rest: arrayToList(arr.slice(1)) };
}

function listToArray(list) {
  let result = [];
  result.push(list.value);
  while (list.hasOwnProperty('rest') && list.rest !== null) {
    list = list.rest;
    if (list.hasOwnProperty('value')) {
      result.push(list.value);
    }
  }
  return result;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

function nth(list, number) {
  return listToArray(list)[number];
}

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/*
  Notes:
  The first function (arrayToList) is a recursive function meaning that once the
  operation is not successful it will call upon itself, looping it. This can be
  seen in the return statement of that function.

  The second function (listToArray) pushes the first value into array whilst the
  other values follow suit with the loop that uses a method to determine if it has
  a non-empty 'rest' key. And so it will continuously loop thought the nested list.

  prepend() simply creates a new object that gets filled with it's parameters.

  nth() simply returns a value that is in the spot of the second param. It will
  count in an array from 0 upwards.
*/
