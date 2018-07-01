// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// sol#3
function reverse(str) {
  // debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

// reverse("asdf");

module.exports = reverse;

// //sol#1 to array to reverse()
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
//
// // sol#2
// function reverse(str) {
//   var result = "";
//   for (let char of str) {
//     result = char + result;
//   }
//   return result;
// }
