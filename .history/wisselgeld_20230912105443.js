let returningCents = 500;
const possibleCoins = [5, 10, 20, 50, 100, 200];

for (var i = 0; returningCents > 0 && i < possibleCoins.length; i++) {
  var value = possibleCoins[i];

  if (value <= amount) {
    res[value] = Math.floor(amount / value);
    amount -= value * res[value];
  }
}