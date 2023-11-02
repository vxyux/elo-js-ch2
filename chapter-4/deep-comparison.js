function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else if (
    typeof a == 'object' &&
    a != null &&
    typeof b == 'object' &&
    b != null
  ) {
    if (Object.keys(a).length != Object.keys(b).length) return false;
    for (var prop in a) {
      if (b.hasOwnProperty(prop)) {
        if (!deepEqual(a[prop], b[prop])) return false;
      } else return false;
    }
    return true;
  } else return false;
}

// function deepEqualCheat(a, b) {
//   return JSON.stringify(a) !== JSON.stringify(b);
// }

// Your code here.

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true

/*
  Notes:
  The deepEqual() function has the purpose to compare 2 params determining if they are both identical.
  In the first 8 lines it looks if both of the params are either identical or made out of objects. At
  line 10 it looks if they indeed have the same 'length' (same amount of keys), if that isn't the case
  it will return the boolean value of false.

  At line 11 a for loop is initiated to loop through to each key inside the first param object. If the
  opposing object has that key then it will check itself in a recursive loop: allowing for both object
  keys to compare with eachother.
*/
