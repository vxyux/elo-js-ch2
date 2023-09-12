let amount = 500;
let calculatedChange = {};
const possibleCoins = [5, 10, 20, 50, 100, 200];

/*
  -- first statement makes sure that the amount is greater than 0
  -- second statement makes sure that it goes through all the array key values
*/
for (var i = 0; amount > 0 && i < possibleCoins.length; i++) {
  const value = possibleCoins[i];
  // if the coin is smaller or equal to the amount
  if (amount  value) {
    // bind the coin to a new object key with the value of the amount of coins
    calculatedChange[value] = Math.floor(amount / value);
    amount -= value * calculatedChange[value];
  }
}

console.log(calculatedChange)