// num starting from zero
let num = 0;

// for loop to loop increment num
for (let i = 0; i < 100; i++) {
  num++;
  // if num can be divided by both 3 and 5 - log F
  if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz');
  else if (num % 3 === 0) console.log('Fizz');
  else if (num % 5 === 0) console.log('Buzz');
  else console.log(num);
}
