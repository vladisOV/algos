// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const result = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(n) * parseInt(result);
}

module.exports = reverseInt;
//
// function reverseInt(n) {
//   if (n === 0) {
//     return n;
//   }
//   var result;
//   for (let char of n.toString()) {
//     if (char !== "0") {
//       result = char + result;
//     }
//   }
//   let resInt = parseInt(result);
//   return Math.sign(n) * resInt;
// }
