let returningCents = 500;
let calculatedChange = {};
const possibleCoins = [5, 10, 20, 50, 100, 200];

for (var i = 0; returningCents > 0 && i < possibleCoins.length; i++) {
  const value = possibleCoins[i];
  if (value <= returningCents) {
    calculatedChange[value] = Math.floor(returningCents / value);
    returningCents -= value * calculatedChange[value];
  }
}