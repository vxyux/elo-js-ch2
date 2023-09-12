let amount = 100;
let calculatedChange = {};
const possibleCoins = [5, 10, 20, 50, 100, 200];

/*
  -- first statement makes sure that the amount is greater than 0
  -- second statement makes sure that it goes through all the array key values
*/
for (var i = 0; amount > 0 && i < possibleCoins.length; i++) {
  const value = possibleCoins.reverse()[0];
  // if the coin is smaller or equal to the amount
  if (value <= amount) {
    // bind the coin to a new object key with the value of the amount of how much of that coin
    calculatedChange[value] = Math.floor(amount / value);
    amount -= value * calculatedChange[value];
  }
  console.log(value);
}
