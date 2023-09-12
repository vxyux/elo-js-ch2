let i = 0;
let returningCents = 500;
const possibleCoins = [5, 10, 20, 50, 100, 200];

for (var i = 0; returningCents > 0 && i < coins.length; i++) {
  var value = coins[i];

  if (value <= amount) {
    res[value] = Math.floor(amount / value);
    amount -= value * res[value];
  }
}