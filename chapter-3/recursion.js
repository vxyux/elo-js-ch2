function isEven(n) {
  if (n == 0) {
    return true;
  } else {
    return n % 2 == 0 ? true : false;
  }
  return isEven(n - 2);
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));
