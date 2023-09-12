let amount = 903;
let calculatedChange = {};
const possibleCoins = [200, 100, 50, 20, 10, 5, 2, 1];

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

// printing out to the console in a more intuitive and simple way
console.log('U krijgt het volgende wisselgeld terug:');
for (const key in calculatedChange) {
  if (key < 100)
    console.log(`${calculatedChange[key]}x : ${key} cent`);
  else console.log(`${calculatedChange[key]}x : ${key / 100} euro`);
}

//console.log(calculatedChange);
