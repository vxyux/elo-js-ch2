/*
  inside let 'amount' insert the amount of cents you want as change
*/
let amount = 903;
// let amount = Math.round(amount / 10) * 10 // rounding amount to nearest tenth
console.log(amount);
let calculatedChange = {};
//const possibleCoins = [1, 2, 5, 10, 20, 50, 100, 200]; //smallest solution
const possibleCoins = [200, 100, 50, 20, 10, 5, 2, 1]; //biggest solution

/*
  -- first statement makes sure that the amount is greater than 0
  -- second statement makes sure that it goes through all the array key values
*/
for (var i = 0; amount > 0 && i < possibleCoins.length; i++) {
  const value = possibleCoins[i];
  // if coin is smaller than the amount
  if (value <= amount) {
    // bind the coin to a new object key with the value of the amount of how much of that coin
    calculatedChange[value] = Math.floor(amount / value);
    // decrease amount according to the calculated change
    amount -= value * calculatedChange[value];
  }
}

console.log('U krijgt het volgende wisselgeld terug:');
for (const key in calculatedChange) {
  if (key < 100)
    console.log(`${calculatedChange[key]}x : ${key} cent`);
  else console.log(`${calculatedChange[key]}x : ${key / 100} euro`);
}

console.log(calculatedChange);
