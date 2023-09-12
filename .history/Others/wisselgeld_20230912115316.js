let amount = 903;
let calculatedChange = {};
const possibleCoins = [200, 100, 50, 20, 10, 5, 2, 1];

for (var i = 0; amount > 0 && i < possibleCoins.length; i++) {
  const value = possibleCoins[i];
  if (value <= amount)
  {
    calculatedChange[value] = Math.floor(amount / value);
    amount -= value * calculatedChange[value];
  }
}
console.log(calculatedChange);
