let amount = 500;
let calculatedChange = {};
const possibleCoins = [5, 10, 20, 50, 100, 200];
//const possibleCoins = [200, 100, 50, 20, 10, 5];

const input = prompt("What's your name?");

/*
  -- first statement makes sure that the amount is greater than 0
  -- second statement makes sure that it goes through all the array key values
*/
for (var i = 0; amount > 0 && i < possibleCoins.length; i++) {
  const value = possibleCoins[i];
  if (value <= amount) {
    // bind the coin to a new object key with the value of the amount of how much of that coin
    calculatedChange[value] = Math.floor(amount / value);
    amount -= value * calculatedChange[value];
  }
}
console.log(calculatedChange);
